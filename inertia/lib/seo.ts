import { faqs } from "@/data/faq";
import { anosDeAtuacao } from "@/lib/experiencia";

// Título e descrição front-loadam o que as pessoas buscam ("psicólogo online",
// "ansiedade") e cabem no corte do Google (~60 e ~155 caracteres).
export const TITULO = "Psicólogo Online para Ansiedade e Depressão | Gabriel Jesus";
export const DESCRICAO =
  "Psicoterapia online com Gabriel Jesus, psicólogo clínico (CRP 06/171722) formado pela UNIFESP. TCC para ansiedade, depressão e TDAH. Agende pelo WhatsApp.";

export const contato = {
  telefone: "+55-13-98166-4867",
  email: "psicologo.gabrielj@gmail.com",
  instagram: "https://www.instagram.com/gabrieljpsi/",
  linkedin: "https://www.linkedin.com/in/gabrielj-psi/",
  // Perfil da Empresa no Google pelo ID do Knowledge Graph, que não muda se o
  // nome do perfil mudar (o link de compartilhar só redireciona para cá).
  perfilGoogle: "https://www.google.com/search?kgmid=/g/11zjjh0t8p",
};

/**
 * Um @graph liga as entidades pelo @id — o Google entende que o psicólogo, o
 * serviço, o site e o FAQ são o mesmo assunto, não blocos soltos. Só fatos que
 * já estão na página: nada de endereço físico (o atendimento é online) nem
 * preço (o CFP proíbe usar preço como divulgação). Os depoimentos ficam de
 * fora de propósito: avaliação publicada pelo próprio negócio sobre si mesmo
 * não é elegível a estrelas no Google e pode gerar ação manual.
 */
export function jsonLd(base: string) {
  const pessoa = `${base}/#gabriel`;
  const servico = `${base}/#psicoterapia`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": pessoa,
        name: "Gabriel Jesus",
        jobTitle: "Psicólogo Clínico",
        description: `Psicólogo clínico com ${anosDeAtuacao()} anos de atuação em Terapia Cognitivo-Comportamental, atendendo online em todo o Brasil.`,
        url: `${base}/`,
        image: `${base}/og-image.jpg`,
        email: contato.email,
        telephone: contato.telefone,
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Universidade Federal de São Paulo (UNIFESP)",
        },
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Registro profissional",
          name: "CRP 06/171722",
          recognizedBy: {
            "@type": "Organization",
            name: "Conselho Regional de Psicologia de São Paulo (CRP-06)",
          },
        },
        knowsAbout: [
          "Terapia Cognitivo-Comportamental",
          "Ansiedade",
          "Depressão",
          "TDAH",
          "Autoestima",
          "Conflitos amorosos",
          "Desenvolvimento pessoal",
        ],
        knowsLanguage: "pt-BR",
        sameAs: [contato.instagram, contato.linkedin],
      },
      {
        "@type": "ProfessionalService",
        "@id": servico,
        name: "Psicólogo Gabriel Jesus — Psicoterapia Online",
        description: DESCRICAO,
        url: `${base}/`,
        image: `${base}/og-image.jpg`,
        telephone: contato.telefone,
        email: contato.email,
        founder: { "@id": pessoa },
        areaServed: { "@type": "Country", name: "Brasil" },
        availableLanguage: "pt-BR",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "10:30",
            closes: "13:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "14:00",
            closes: "22:30",
          },
        ],
        makesOffer: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Psicoterapia online",
            serviceType: "Terapia Cognitivo-Comportamental",
            description:
              "Sessões de 50 minutos por videochamada, semanais ou quinzenais.",
            provider: { "@id": pessoa },
            areaServed: { "@type": "Country", name: "Brasil" },
          },
        },
        sameAs: [contato.instagram, contato.linkedin, contato.perfilGoogle],
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: `${base}/`,
        name: "Psicólogo Gabriel Jesus",
        inLanguage: "pt-BR",
        publisher: { "@id": pessoa },
      },
      {
        "@type": "WebPage",
        "@id": `${base}/#webpage`,
        url: `${base}/`,
        name: TITULO,
        description: DESCRICAO,
        inLanguage: "pt-BR",
        isPartOf: { "@id": `${base}/#website` },
        about: { "@id": servico },
        primaryImageOfPage: `${base}/og-image.jpg`,
      },
      {
        "@type": "FAQPage",
        "@id": `${base}/#faq`,
        isPartOf: { "@id": `${base}/#webpage` },
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

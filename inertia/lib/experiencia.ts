// Ano em que o Gabriel começou a atender. O hero ("4+ anos") e o "Sobre"
// ("4 anos de atuação") leem daqui para não divergirem com a virada do ano.
export const INICIO_ATUACAO = 2022;

export const anosDeAtuacao = () => new Date().getFullYear() - INICIO_ATUACAO;

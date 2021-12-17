const size = {
    xs: "320px",
    sm: "768px",
    lg: "1200px",
};
const device = {
    xs: `@media only screen and (max-width: ${size.xs})`,
    sm: `@media only screen and (max-width: ${size.sm})`,
    lg: `@media only screen and (max-width: ${size.lg})`,
};

export const breakpoint = { size, device };

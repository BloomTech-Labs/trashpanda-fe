import { createGlobalStyle } from "styled-components";
import { isDesktop } from "../App";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => (isDesktop() ? "#FFFFFF" : theme.body)};
    }
`;

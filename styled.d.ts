import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      /*
      Primary
      */
      background: string;
      foreground: string;
      accent1: string;
      accent2: string;
      accent3: string;
      accent4: string;
      accent5: string;
      accent6: string;
      accent7: string;
      accent8: string;
      /* Error */
      error: string;
      errorLight: string;
      errorLighter: string;
      errorDark: string;

      /* Success */
      success: string;
      successLight: string;
      successLighter: string;
      successDark: string;

      /* Warning */
      warning: string;
      warningLight: string;
      warningLighter: string;
      warningDark: string;

      highglight: string;
      brand: string;
    };
    fontSize: {
      /* 
    14px is the smallest font we should allow in the UI to pass 
    mobile usability issue. 
    Setting it to REM would shrink it to 12px on mobile which is 
    too small
    */
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
    };
    fontWeight: {
      1: string;
      2: string;
      3: string;
      4: string;
    };
    borderRadius: {
      1: string;
      2: string;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    breakpointsAsInt: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    space: {
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
      11: string;
      12: string;
    };
    zIndex: {
      1: number;
      2: number;
      3: number;
      4: number;
    };
  }
}

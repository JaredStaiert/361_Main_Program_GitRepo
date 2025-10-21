import {Card, Container, createTheme, type MantineColorsTuple, Paper, rem, Select} from "@mantine/core";
import type {MantineThemeOverride} from "@mantine/core";

const vermilion: MantineColorsTuple = [
    "#ffebe9",
    "#fed7d4",
    "#f4ada8",
    "#eb8179",
    "#e2544a",
    "#df4338",
    "#de362a",
    "#c5271e",
    "#b02019",
    "#9b1512"
]

const indigoDye: MantineColorsTuple = [
    "#f1f4f8",
    "#e3e6ea",
    "#c2cad5",
    "#9fadc2",
    "#8194b1",
    "#6e85a7",
    "#647da3",
    "#536b8f",
    "#485f81",
    "#344966"
]

export const hunterGreen: MantineColorsTuple = [
    "#f1f9f2",
    "#e2efe4",
    "#c1dec5",
    "#9dcca4",
    "#7ebd87",
    "#6bb475",
    "#60b06b",
    "#509a5a",
    "#45894f",
    "#2c5f34"
]

const CONTAINER_SIZES: Record<string, string> = {
    xxs: rem("200px"),
    xs: rem("300px"),
    sm: rem("400px"),
    md: rem("500px"),
    lg: rem("600px"),
    xl: rem("1400px"),
    xxl: rem("1600px"),
};

export const mantineTheme: MantineThemeOverride = createTheme({
    /** Put your mantine theme override here */
    colors: {
        vermilion,
        indigoDye,
        hunterGreen
    },
    fontSizes: {
        xs: rem("12px"),
        sm: rem("14px"),
        md: rem("16px"),
        lg: rem("18px"),
        xl: rem("20px"),
        "2xl": rem("24px"),
        "3xl": rem("30px"),
        "4xl": rem("36px"),
        "5xl": rem("48px"),
    },
    spacing: {
        "3xs": rem("4px"),
        "2xs": rem("8px"),
        xs: rem("10px"),
        sm: rem("12px"),
        md: rem("16px"),
        lg: rem("20px"),
        xl: rem("24px"),
        "2xl": rem("28px"),
        "3xl": rem("32px"),
    },
    primaryColor: "vermilion",
    components: {
        /** Put your mantine component override here */
        Container: Container.extend({
            vars: (_, {size, fluid}) => ({
                root: {
                    "--container-size": fluid
                        ? "100%"
                        : size !== undefined && size in CONTAINER_SIZES
                            ? CONTAINER_SIZES[size]
                            : rem(size),
                },
            }),
        }),
        Paper: Paper.extend({
            defaultProps: {
                p: "md",
                shadow: "xl",
                radius: "md",
                withBorder: true,
            },
        }),

        Card: Card.extend({
            defaultProps: {
                p: "xl",
                shadow: "xl",
                radius: "var(--mantine-radius-default)",
                withBorder: true,
            },
        }),
        Select: Select.extend({
            defaultProps: {
                checkIconPosition: "right",
            },
        }),
    },
    other: {
        style: "mantine",
    },
});
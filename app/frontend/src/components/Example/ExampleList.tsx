import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "How much was Wildfire on Palo Alto 850?",
        value: "How much was Wildfire on Palo Alto 850?"
    },
    { text: "How much is our Microsoft Sql Server licensing per year?", value: "How much is our Microsoft Sql Server licensing per year?" },
    { text: "How much was our veeam renewal?", value: "How much was our veeam renewal?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};

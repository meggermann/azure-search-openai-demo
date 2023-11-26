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
    { text: "How much was our Mist renewal?", value: "How much was our Mist renewal?" },
    { text: "When does our CoreSite contract expire?", value: "When does our CoreSite contract expire?" }
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

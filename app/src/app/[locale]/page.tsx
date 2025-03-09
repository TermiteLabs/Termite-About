'use client';

import {useTranslations} from "use-intl";

export default function Home() {
    const n = useTranslations('nav');

    return (
        <div>
            {n('greeting')}
        </div>
    )
}
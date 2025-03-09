import { NextIntlClientProvider } from 'next-intl';

export function generateStaticParams() {
    return [
        { params: { locale: 'en' } },
    ]
}

export default function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode,
    params : { locale: string }}
) {
    return (
        <NextIntlClientProvider>
            {children}
        </NextIntlClientProvider>
    )
}
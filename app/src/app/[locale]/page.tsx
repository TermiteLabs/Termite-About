export default function Home({ params } : { params: { locale: string} }) {
    const locale = params.locale;

    return (
        <div>
            <NavigationBar />
        </div>
    )
}
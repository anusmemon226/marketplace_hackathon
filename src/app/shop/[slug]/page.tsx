import ProductDetail from '@/components/ProductDetail'
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params
    return (
        <ProductDetail slug={slug} />
    )
}
export default page
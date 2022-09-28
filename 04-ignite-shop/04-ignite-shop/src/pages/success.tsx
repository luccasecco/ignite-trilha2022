import { GetServerSideProps, NextPage } from "next"
import Image from "next/future/image"
import Head from "next/head"
import Link from "next/link"
import Stripe from "stripe"
import { stripe } from "../lib/stripe"
import { SuccessContainer, ImageContainer } from "../styles/pages/success"

interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  }
}

const Success: NextPage<SuccessProps> = ({ customerName, product }) => {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ImageContainer>
          <Image
            src={product.imageUrl}
            width={110}
            height={120}
            alt={product.name} />
        </ImageContainer>

        <p>
          Uhuul <strong>{customerName}</strong>,
          sua {product.name} já está a caminho da sua casa.
        </p>

        <Link href="/" prefetch={false}>
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.sessionId) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details!.name;
  const product = session.line_items!.data[0].price!.product as Stripe.Product

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0]
      }
    }
  }
}

export default Success
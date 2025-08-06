import ContentContainer from "@/components/ContentContainer";
import Layout from "@/components/Layout";

function Privacy() {
  return (
    <Layout>
      <ContentContainer>
        <div>
          <h1>Privacy Policy</h1>
          <p>We take your privacy seriously at ConvertCat.</p>
          <p>
            We don't run analytics software of any kind on any page of the
            business.
          </p>

          <p>We don't keep ongoing logs of your visits on our servers.</p>

          <p>
            We don't collect any identifying information on you unless you give
            us permission to do so. There are only two ways to do that:
          </p>

          <ul>
            <li>
              By signing up for ConvertCat's Letters, our weekly mailing list.
            </li>
            <li>By buying something from us, like one of our tools etc.</li>
          </ul>

          <p>
            That's it. If you unsubscribe from our mailing list, we delete your
            information permanently. We delete your physical shipping address
            from our database after your order has been shipped.
          </p>

          <p>
            Our payments provider stores your payment information, encrypted and
            anonymized, such that we cannot do anything meaningful with it. Read
            their privacy policy here for more details.
          </p>

          <p>
            We only track what's absolutely essential to the operation of our
            business – because it's simply the right thing to do.
          </p>

          <p>
            We've tried to keep this as simple and readable as possible, but if
            there's some sort of use case you're concerned about, please get in
            touch and we'll do our best to make it right – and then we'll update
            this policy accordingly.
          </p>

          <p>
            Thanks for reading, and for supporting our small independent
            business.
          </p>
        </div>
      </ContentContainer>
    </Layout>
  );
}

export default Privacy;

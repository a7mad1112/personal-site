import Container from "../layout/Container.jsx";
import SectionHeader from "../layout/SectionHeader.jsx";
import Card from "../ui/Card.jsx";
import Button from "../ui/Button.jsx";
import GetInTouch from "./GetInTouch.jsx";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionHeader
          title="Contact"
          subtitle="Let’s start a project together"
        />
        <div className="grid lg:grid-cols-2 gap-10">
          <GetInTouch />
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Send Me A Message</h3>
            <form className="grid gap-4">
              <input
                className="rounded-xl border border-[var(--border)] bg-transparent px-4 py-2.5"
                placeholder="Your Name"
              />
              <input
                className="rounded-xl border border-[var(--border)] bg-transparent px-4 py-2.5"
                placeholder="Your E-mail"
              />
              <input
                className="rounded-xl border border-[var(--border)] bg-transparent px-4 py-2.5"
                placeholder="Message Subject"
              />
              <textarea
                rows={5}
                className="rounded-xl border border-[var(--border)] bg-transparent px-4 py-2.5"
                placeholder="Tell me how I can help you"
              />
              <Button as="button" type="submit" className="self-start">
                Send
              </Button>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}

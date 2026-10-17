import Image, { type StaticImageData } from "next/image";
import redDevil from "@/public/menu/red-devil.jpg";
import beefChampion from "@/public/menu/beef-champion.jpg";
import tomyumHattrick from "@/public/menu/tomyum-hattrick.jpg";
import superSub from "@/public/menu/super-sub.jpg";

const LINE_ID = "tkmanu";
const LINE_URL = `https://line.me/R/ti/p/~${LINE_ID}`;

const highlights = [
  {
    icon: "🍜",
    title: "น้ำซุปสูตรเด็ด",
    text: "เคี่ยวกระดูกนานหลายชั่วโมงจนเข้มข้น หอมเครื่องเทศ ใช้วัตถุดิบสดใหม่ทุกวัน",
  },
  {
    icon: "📸",
    title: "ร้านธีมฟุตบอลแดง-ดำ",
    text: "ตกแต่งเหมือนนั่งอยู่ข้างสนาม มีมุมถ่ายรูปเก๋ ๆ ให้แชะแล้วแชร์ได้ทุกโต๊ะ",
  },
  {
    icon: "⚽",
    title: "เมนูชื่อสนุก + โปรวันแข่ง",
    text: "สั่งง่าย จำง่าย สไตล์แฟนบอล แถมโปรพิเศษทุกวันที่ทีมรักลงสนาม",
  },
];

type MenuItem = {
  name: string;
  tag: string;
  desc: string;
  price: number;
  img: StaticImageData;
  alt: string;
};

const menu: MenuItem[] = [
  {
    name: "ก๋วยเตี๋ยวปีศาจแดง",
    tag: "เมนูกัปตันทีม",
    desc: "หมูตุ๋นนุ่ม ลูกชิ้นเด้ง น้ำซุปเข้มข้นสูตรประจำร้าน",
    price: 69,
    img: redDevil,
    alt: "ก๋วยเตี๋ยวหมูตุ๋นพร้อมลูกชิ้นในชามสีขาว",
  },
  {
    name: "เนื้อตุ๋นแชมป์เปียน",
    tag: "ขายดีอันดับ 1",
    desc: "เนื้อตุ๋นชิ้นโต เปื่อยละลายในปาก น้ำซุปหอมเครื่องยาจีน",
    price: 89,
    img: beefChampion,
    alt: "ก๋วยเตี๋ยวเนื้อตุ๋นชิ้นใหญ่ในน้ำซุปสีเข้ม",
  },
  {
    name: "ต้มยำแฮตทริก",
    tag: "แซ่บ 3 เด้ง",
    desc: "ต้มยำรสจัดจ้าน หมูสับ หมูชิ้น ลูกชิ้น ครบสามประสาน",
    price: 79,
    img: tomyumHattrick,
    alt: "ก๋วยเตี๋ยวต้มยำหมูสับและลูกชิ้นพร้อมเครื่องปรุง",
  },
  {
    name: "ซูเปอร์ซับจัมโบ้",
    tag: "ชามใหญ่สะใจ",
    desc: "บะหมี่แห้งจัดเต็ม ไข่ยางมะตูม ลูกชิ้นรวม เกี๊ยวกรอบ พร้อมน้ำซุปแยก",
    price: 99,
    img: superSub,
    alt: "บะหมี่แห้งชามใหญ่ใส่ไข่ยางมะตูม ลูกชิ้น และเกี๊ยวกรอบ",
  },
];

const faqs = [
  {
    q: "ร้านเปิดกี่โมง?",
    a: "เปิดทุกวัน 10:00 – 21:00 น. วันที่มีแมนยูเตะดึก ร้านอาจเปิดยาวถึงจบเกม ทักไลน์ถามก่อนได้เลย",
  },
  {
    q: "โปรวันแข่งคืออะไร?",
    a: "วันที่แมนยูลงสนาม ใส่เสื้อทีมสีแดงมาที่ร้าน รับส่วนลด 10% ทุกเมนู และถ้าทีมชนะ วันรุ่งขึ้นรับเครื่องดื่มฟรี 1 แก้ว",
  },
  {
    q: "จองโต๊ะดูบอลได้ไหม?",
    a: "ได้เลย! ทักไลน์บอกวัน เวลา และจำนวนคน ทางร้านจะเก็บโต๊ะหน้าจอไว้ให้",
  },
  {
    q: "ไม่ใช่แฟนแมนยู มากินได้ไหม?",
    a: "ได้แน่นอน! ร้านเราต้อนรับทุกคนที่รักก๋วยเตี๋ยว มากับเพื่อนหรือครอบครัวก็สนุกได้เหมือนกัน",
  },
];

function LineIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M12 2.5C6.2 2.5 1.5 6.3 1.5 11c0 4.2 3.7 7.7 8.8 8.4.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.6 1.1-.5 6-3.5 8.2-6 1.5-1.7 2.3-3.4 2.3-5.4 0-4.7-4.7-8.5-10.5-8.5Zm-4.9 11.3H5c-.3 0-.5-.2-.5-.5V9.1c0-.3.2-.5.5-.5s.5.2.5.5v3.7h1.6c.3 0 .5.2.5.5s-.2.5-.5.5Zm2.2-.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V9.1c0-.3.2-.5.5-.5s.5.2.5.5v4.2Zm5 0c0 .2-.1.4-.3.5h-.2c-.2 0-.3-.1-.4-.2l-2.1-2.9v2.6c0 .3-.2.5-.5.5s-.5-.2-.5-.5V9.1c0-.2.1-.4.3-.5h.2c.2 0 .3.1.4.2l2.1 2.9V9.1c0-.3.2-.5.5-.5s.5.2.5.5v4.2Zm3.4-2.6c.3 0 .5.2.5.5s-.2.5-.5.5h-1.6v1h1.6c.3 0 .5.2.5.5s-.2.5-.5.5h-2.1c-.3 0-.5-.2-.5-.5V9.1c0-.3.2-.5.5-.5h2.1c.3 0 .5.2.5.5s-.2.5-.5.5h-1.6v1h1.6Z" />
    </svg>
  );
}

function LineButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-devil px-7 py-4 font-display text-lg font-semibold text-white shadow-[0_8px_30px_rgb(218_41_28/0.45)] transition hover:bg-devil-dark hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-gold ${className}`}
    >
      <LineIcon className="size-6" />
      ทักไลน์เลย
    </a>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-10 text-center">
      <p className="font-display text-sm font-semibold tracking-widest text-gold uppercase">{kicker}</p>
      <h2 className="mt-2 font-display text-h2 font-extrabold">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* แถบบนสุด */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-ink/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-extrabold">
            <span aria-hidden="true" className="grid size-9 place-items-center rounded-full bg-devil text-xl">
              😈
            </span>
            <span>
              Red Devil <span className="text-devil">Noodle</span>
            </span>
          </a>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-line px-4 py-2 text-sm font-bold text-white transition hover:brightness-110"
          >
            <LineIcon className="size-5" />
            ทักไลน์
          </a>
        </div>
      </header>

      <main id="top">
        {/* ส่วนหัว */}
        <section className="pitch-lines relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-12 pb-16 md:grid-cols-2 md:pt-20 md:pb-24">
            <div className="text-center md:text-left">
              <p className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-sm font-medium text-gold">
                ⚽ ร้านก๋วยเตี๋ยวของคนรักบอล
              </p>
              <h1 className="mt-5 font-display text-display font-extrabold">
                ก๋วยเตี๋ยว<span className="text-devil">ปีศาจแดง</span>
              </h1>
              <p className="mt-2 font-display text-xl font-semibold text-muted">Red Devil Noodle</p>
              <p className="mx-auto mt-5 max-w-md text-lead text-cream/90 md:mx-0">
                หมูตุ๋น เนื้อตุ๋น น้ำซุปเข้มข้นถึงใจ กินไปเชียร์ไป ในร้านธีมแดง-ดำ ที่แฟนแมนยูต้องมาเช็กอิน!
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:justify-start">
                <LineButton className="w-full sm:w-auto" />
                <a
                  href="#menu"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/25 px-7 py-4 font-display text-lg font-semibold transition hover:border-white/60 hover:bg-white/5 sm:w-auto"
                >
                  ดูเมนู
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md md:max-w-none">
              <div aria-hidden="true" className="absolute -inset-3 rotate-3 rounded-[2rem] bg-devil" />
              <Image
                src={redDevil}
                alt="ก๋วยเตี๋ยวหมูตุ๋นปีศาจแดง เมนูเด่นของร้าน"
                priority
                placeholder="blur"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-5 left-4 rounded-2xl bg-gold px-4 py-2 font-display font-extrabold text-ink shadow-lg -rotate-3">
                เริ่มต้น 69.-
              </div>
            </div>
          </div>
        </section>

        {/* จุดเด่น */}
        <section className="bg-coal py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle kicker="ทำไมต้องร้านเรา" title="3 จุดเด่นที่ทำให้ติดใจ" />
            <ul className="grid gap-5 md:grid-cols-3">
              {highlights.map((h, i) => (
                <li
                  key={h.title}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink p-7 transition hover:border-devil/60"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -top-4 right-3 font-display text-8xl font-extrabold text-white/5"
                  >
                    {i + 1}
                  </span>
                  <span aria-hidden="true" className="grid size-14 place-items-center rounded-2xl bg-devil text-3xl">
                    {h.icon}
                  </span>
                  <h3 className="mt-5 font-display text-h3 font-semibold">{h.title}</h3>
                  <p className="mt-2 text-muted">{h.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* เมนู */}
        <section id="menu" className="scroll-mt-16 py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <SectionTitle kicker="รายชื่อนักเตะตัวจริง" title="เมนูเด่นประจำร้าน" />
            <ul className="grid gap-6 sm:grid-cols-2">
              {menu.map((m) => (
                <li
                  key={m.name}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-coal"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={m.img}
                      alt={m.alt}
                      placeholder="blur"
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-devil px-3 py-1 text-sm font-bold text-white">
                      {m.tag}
                    </span>
                  </div>
                  <div className="flex flex-1 items-start justify-between gap-4 p-6">
                    <div>
                      <h3 className="font-display text-h3 font-semibold">{m.name}</h3>
                      <p className="mt-1 text-muted">{m.desc}</p>
                    </div>
                    <p className="shrink-0 font-display text-2xl font-extrabold text-gold">
                      {m.price}
                      <span className="text-base">.-</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-3xl bg-devil p-7 text-center md:flex md:items-center md:justify-between md:text-left">
              <div>
                <p className="font-display text-h3 font-extrabold">🔥 โปรวันแมนยูลงสนาม</p>
                <p className="mt-1 text-white/90">ใส่เสื้อทีมสีแดงมาที่ร้าน ลดทันที 10% ทุกเมนู</p>
              </div>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-display font-semibold text-devil transition hover:bg-cream md:mt-0"
              >
                <LineIcon className="size-5" />
                จองโต๊ะดูบอล
              </a>
            </div>
          </div>
        </section>

        {/* คำถามที่พบบ่อย */}
        <section className="bg-coal py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4">
            <SectionTitle kicker="สงสัยอะไร ถามมาได้" title="คำถามที่พบบ่อย" />
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-white/10 bg-ink open:border-devil/60">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-display text-lg font-semibold">
                    {f.q}
                    <span
                      aria-hidden="true"
                      className="faq-icon grid size-8 shrink-0 place-items-center rounded-full bg-devil text-xl transition"
                    >
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ติดต่อเรา */}
        <section id="contact" className="pitch-lines py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <SectionTitle kicker="หิวแล้วใช่ไหม" title="ติดต่อเรา" />
            <div className="rounded-3xl border border-white/10 bg-ink/80 p-8 backdrop-blur">
              <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-line text-white">
                <LineIcon className="size-10" />
              </div>
              <p className="mt-4 text-muted">LINE ID</p>
              <p className="font-display text-3xl font-extrabold">TK MAN U</p>
              <p className="mt-3 text-cream/90">สั่งล่วงหน้า จองโต๊ะดูบอล หรือถามทางมาร้าน ทักมาได้เลย!</p>
              <LineButton className="mt-6 w-full sm:w-auto" />
              <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 text-left sm:grid-cols-2">
                <p className="flex items-center gap-3">
                  <span aria-hidden="true" className="text-2xl">🕙</span>
                  <span>
                    <span className="block text-sm text-muted">เวลาเปิด</span>
                    ทุกวัน 10:00 – 21:00 น.
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <span aria-hidden="true" className="text-2xl">📍</span>
                  <span>
                    <span className="block text-sm text-muted">ที่ตั้งร้าน</span>
                    ทักไลน์ ขอแผนที่ร้านได้เลย
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ส่วนท้าย */}
      <footer className="border-t-4 border-devil bg-black py-8 text-center text-sm text-muted">
        <p className="font-display text-base font-semibold text-cream">
          Red Devil Noodle – ก๋วยเตี๋ยวปีศาจแดง
        </p>
        <p className="mt-1">กินอิ่ม เชียร์มันส์ Glory Glory! ⚽</p>
        <p className="mt-3">© 2026 Red Devil Noodle</p>
      </footer>

      {/* ปุ่มลอยบนมือถือ */}
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ทักไลน์ร้าน Red Devil Noodle"
        className="fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full bg-line text-white shadow-xl transition hover:scale-105 md:hidden"
      >
        <LineIcon className="size-8" />
      </a>
    </>
  );
}

import aboutBg from "@/assets/about-bg.jpg";

export default function About() {
  return (
    <article className="max-w-3xl mx-auto px-6 pt-8 pb-32">
      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-light text-foreground mb-16 leading-tight">
        En utforskning av fiber och form.
      </h1>

      {/* First text block */}
      <div className="space-y-6 text-sm leading-relaxed text-muted-foreground mb-24">
        <p>
          Terra Studios började med en enkel övertygelse: att kläderna vi bär ska bära värmen från händerna som gjorde dem. Varje plagg i vår kollektion är handstickat av naturliga fibrer — merino, alpacka, kashmir och ull från bevarandeviktiga fårraser — från små gårdar och fristående spinnerier som delar vårt engagemang för etiskt och hållbart hantverk.
        </p>
        <p>
          Vår process är långsam med flit. Varje plagg börjar som en garnhärva, omsorgsfullt nystad och parad med ett mönster framtaget i egen regi. Därifrån arbetar skickliga hantverkare maska för maska och formar ett tyg som rör sig och andas med kroppen. Resultatet är stickat med ett djup i textur och karaktär som ingen maskin kan återskapa — plagg som åldras vackert, mjuknar med tiden och blir mer personliga för varje gång de bärs.
        </p>
      </div>

      {/* Full-width image */}
      <div className="w-full mb-24">
        <img
          src={aboutBg}
          alt="Hantverkare som stickar naturull med trästickor"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Second text block */}
      <div className="space-y-6 text-sm leading-relaxed text-muted-foreground mb-16">
        <p>
          Vi arbetar uteslutande med naturliga, ofärgade och växtfärgade garner och omfamnar de subtila nyansskiftningar som kommer från ullen själv. Vår jordnära palett — sand, havre, rost, koks och mossa — speglar de landskap som inspirerar oss: vindpinade kuster, höstliga hedar och landsbygdens stilla skönhet under alla årstider.
        </p>
        <p>
          Varje kollektion släpps i små serier och många plagg tillverkas på beställning. Vi tror på att göra mindre och göra det väl. När du bär Terra Studios bär du med dig stickornas rytm, garnets textur och omtanken från en hantverkare som brydde sig om varenda maska.
        </p>
      </div>

      {/* Attribution */}
      <p className="text-sm text-muted-foreground">
        Stickat av Terra Studios
      </p>
    </article>
  );
}

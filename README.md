# skuader — site

Site de marketing (landing page) da app **skuader**. Construído em [Astro](https://astro.build) — rápido, quase sem JavaScript, e fácil de pôr online no Vercel.

## Correr no teu computador

```bash
npm install      # só na primeira vez
npm run dev      # abre em http://localhost:4321
```

Para gerar a versão final (a pasta que vai para a internet):

```bash
npm run build    # cria a pasta dist/
npm run preview  # vê a versão final localmente
```

## Pôr online (deploy)

A forma mais simples, e a mesma que o Miguel já usa para a app:

1. Põe esta pasta num repositório no GitHub.
2. Em [vercel.com](https://vercel.com) → **Add New → Project** → escolhe o repositório.
3. O Vercel deteta o Astro sozinho. Carrega em **Deploy**. Fica online com um link.

(Alternativa sem GitHub: corre `npm run build` e arrasta a pasta `dist/` para [app.netlify.com/drop](https://app.netlify.com/drop).)

## Onde mexer nas coisas

| Quero mudar… | Ficheiro |
|---|---|
| **O nome / wordmark** (`skuader`) | `src/components/Hero.astro` e `src/components/Closing.astro` |
| **As cores** (ink, papel, lima) | `src/styles/tokens.css` |
| **Os textos** de cada secção | o ficheiro da secção em `src/components/` (ex.: `Problem.astro`, `Proof.astro`) |
| **A ordem das secções** | `src/pages/index.astro` |
| **O título/descrição da página** (Google, redes sociais) | `src/layouts/Base.astro` |

### Trocar a grafia do nome
Por agora a wordmark está em minúsculas (`skuader.`). Para mudar (ex.: `Skuader.`),
edita a lista de letras no topo de `Hero.astro` e `Closing.astro`.

## Estrutura

```
src/
  pages/index.astro      → a página (junta as secções)
  layouts/Base.astro     → <head>, fontes, e o motor de animação
  components/            → cada secção da landing + Botão e Ícones
  styles/
    tokens.css           → cores, tipografia, espaçamentos da marca
    global.css           → reset, botões, animações
```

## Marca (resumo)

- **Tipografia:** Boldonse (só na wordmark gigante) + Inter (todo o resto).
- **Cor:** tinta escura + papel quente + **uma** cor de acento (lima `#CFFF4B`), usada com conta-gotas. O lima significa sempre "locked in / a ação".
- **Modo claro e escuro:** segue o sistema automaticamente.

Fonte de verdade dos tokens: o documento `squad-brand-handoff.md` do Miguel.

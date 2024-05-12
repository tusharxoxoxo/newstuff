# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

some points i want to add to this

pnpm dev


#newstuff

##TODO

- [x] Make it deploy (vercel)
- [ ] Scaffold basic ui with mock data
- [ ] Set up the database with postgres vercel
- [ ] Attach database to ui 
- [ ] Add Authentication with clerk
- [ ] Add image upload
- [ ] Error management with sentry
- [ ] Routing/image page (parallet route stuff)
- [ ] Delete button with server actions
- [ ] Analytics (posthog)
- [ ] Ratelimiting (upstash)    

we will be doing `git add -p` instead of `git add -a`, by this we will be effectively be doing mini code reviews for the changes we have made

now come to the mock data, we need images, because this is gallery, but hosting your files directly from public has so much issues, such as bandwidth usage, should be avoid by our best of the abilites
so for that we are going to be using upload thing, it does charge for the bandwidth at all

i just added another layout in layout2, so what is the use of this???
-> first layer applies in the outside, the second layer applies in the next layer, and as u keep nexting, these layers keep getting applied 

why would u ever want this?
like for example in dashboard thing, u may always want to top nav to exist, everywhere u r in the dashboard, so in the dashboard folder
we have this root layout that have this top nav, now with this we have slietly different url, 

we also a have a side nav and a top nav, this layout is so convinient, and doing this in the old model was so miserable
so now it's just build into next now

we don't need those layer2, it was just for explaination, so lets remove it

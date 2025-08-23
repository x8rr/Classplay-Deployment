> [!CAUTION]
> PLEASE READ!
> This website will not be updated anymore except for minor bug fixes, as its successor Adurite has overrun it. You are able to access the new site <a href="https://useadurite.vercel.app/">here.</a>

<center>
    <h1>Classplay</h1>
    <p>An easy to use, sleek games website based on Interstellar.</p>
</center>

## Features
- Games
- Apps
- Proxy
- Cloaks + about:blank
- Chatroom
- Movies (work in progress)

## Proxy support
- now.gg
- Youtube
- Discord
- Geforce Now
- easyfun.gg
- ...and more!

## Contact
- contact `afterddark` on Discord
- open an issue

## Links

https://useclassplay.vercel.app/

https://math-for-dummies.vercel.app/

https://amazingmath.vercel.app/

https://coolmathskills.vercel.app/

## Developers

> ### afterddark <br> <sub style="font-weight: 200;">owner, founder</sub>

> ### SyntaxError52 <br> <sub style="font-weight: 200;">helper, former developer</sub>

> ### TypeCorrect25 <br> <sub style="font-weight: 200;">helper, anonymous developer</sub>

> ### SprintingSnail69 <br> <sub style="font-weight: 200;">developer</sub>

## credits
- movies/website inspo: rednotsus
- Proxy: UseInterstellar


## stats

![Alt](https://repobeats.axiom.co/api/embed/dba2e85b03b71cd08c71b2235e5b96e087945cd9.svg "Repobeats analytics image")

## Deployment

> [!IMPORTANT]
> You **cannot** deploy to static web hosts, including Netlify, Cloudflare Pages, and GitHub Pages.
> You can also **not** deploy to Render or Railway anymore as they have banned Ultraviolet.

> [!NOTE]
> Alternatively, you **can** deploy to Vercel by forking this repo and deploying or clicking the button below.
> 
> [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/afterddark/classplay)

### Password Protection

1. Go to the `config.js` file and set `challenge` to **true**. Then, set the environment variable as follows:
2. For PNPM: Run either `config=true pnpm start` or `$env:config=true; pnpm start`, depending on your server.
3. For Bun: Run either `config=true bun start` or `$env:config=true; bun start` if you prefer Bun.
4. For NPM: Run either `config=true npm start` or `$env:config=true; npm start` if you prefer NPM.


### Server Deployment

You must run these commands on your server:

```bash
git clone https://github.com/AduriteNetwork/Classplay
cd Classplay
```

Next depending on your package manager, run one of the following commands:

#### Bun

If you are using Bun, run the following commands:

```bash
bun i
bun start
```

#### PNPM (Recommended)

If you are using pnpm, run the following commands:

```bash
pnpm i
pnpm start
```

#### NPM

If you are using npm, run the following commands:

```bash
npm i
npm run start
```

### Updating

```bash
cd Classplay
git pull --force --allow-unrelated-histories # This may overwrite your local changes
```

#### What happened to Replit Deployment?

As of January 1st, 2024, Replit is [no longer free](https://blog.replit.com/hosting-changes). Try GitHub Codespaces instead.

### GitHub Codespaces

> [!NOTE]
> If you're setting the port below 1023, then you must run `sudo PORT=1023`

1. Create a GitHub account if you haven't already.
2. Click "Code" (green button) and then "Create Codespace on main."
3. In the terminal at the bottom, paste `pnpm i && pnpm start`.
4. Respond to the application popup by clicking "Make public."
> [!IMPORTANT]
> Make sure you click the "Make public." button, or the proxy won't function properly.
5. Access the deployed website from the ports tab.
6. For subsequent uses in the same codespace, just run `pnpm start`

### Solution for if there is no popup.

1. Run `pnpm i`, and before `pnpm start`, prepend `PORT=8080`, replacing 8080 with another port. For example, `PORT=6969 pnpm start`.
2. If this does not work then you can prepend `$env:PORT=8080;`, replacing 8080 with another port. For example, `$env:PORT=6969; pnpm start`
3. Go to the ports tab, Click Forward A Port, And type the port number.
4. Right-click Visibility and set Port Visibility to Public.

> [!NOTE]
> We are committed to making Interstellar easy and personalized however, as of now we need your support in making it ad-free. Consider keeping ads so Interstellar can run freely or contribute by being a supporter.

## Report Issues

If you encounter problems, open an issue on GitHub, and we'll address it promptly.

# Credits

A huge thanks goes out to all of the people who have contributed to classplay.

[![Contributors](https://contrib.rocks/image?repo=afterddark/classplay)](https://github.com/afterddark/classplay/graphs/contributors)

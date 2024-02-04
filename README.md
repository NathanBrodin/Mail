[![codecov](https://codecov.io/gh/NathanBrodin/Mail/graph/badge.svg?token=UYSTekOTeu)](https://codecov.io/gh/NathanBrodin/Mail)

## Installation

This project uses [Bun](https://bun.sh) as a package manager. You can install it using the following command:

```bash
curl -fsSL https://bun.sh/install | bash
```

Then, install the dependencies:

```bash
bun install
```

### Authentication
copy the `.env.example` file to `.env.local` and fill in the required fields.

You can find Auth0 credentials in the [Auth0 Dashboard](https://manage.auth0.com/dashboard/eu/dev-3z3z3z3z/applications/)

To create the `NEXTAUTH_SECRET` you can use the following command:
```bash
openssl rand -base64 32
```

More info in [NextAuth.js documentation](https://next-auth.js.org/deployment)

## Getting Started

First, run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<div style="text-align: center">
    <h1>Test Coverage Report
    <a href="https://codecov.io/gh/NathanBrodin/Mail/graphs/sunburst.svg?token=UYSTekOTeu">
        <img src="https://codecov.io/gh/NathanBrodin/Mail/graphs/sunburst.svg?token=UYSTekOTeu" alt="codecovreport">
    </a>
</div>

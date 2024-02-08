import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {},
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
  env: {
    AUTH_COOKIE: 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..aaNKtpvhkRLSz7KB.Cd0BweexPC0XpM4GNkeA3F1O3nGSxF_ofppwxMxxphLIKP0f8AE3dEPDB6e-wwTf3KW6WNUe-Pfozp-hoLr-ng4f1tW6c0WApdLdTn_0UgD_5kfB8T052dT7hgd03IOtxNRcBCcNo1N_7ZEvYL-bS_hrGMxI7z_c5h7J3FDZKpR4K3KgZJ-uo9sl0k-WhjAge8xnCx193O_mi4iBls9q9btH8LIVavjGWsyRkc03pCgs1p5Vth0X_Y3AHqPge85aiPx10blXBDs8rcQmGtSZSuxiCIj7uMEKPBzpPM6e-Wa4nw1HzcnF7sDzjlXbLdnWttxhFjKxx8TeCrhlpgHrF0kNpunmmubAfMMIDdh6eMtKP30.Pct6udiHbtquAgk-DT3XYw',
  },
});

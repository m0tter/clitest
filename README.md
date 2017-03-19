# clitest

Steps to repeat problem

1. run 'ng serve'
 - you receive "ERROR in /Users/josephss/Documents/Code/ngWebpack/client/src/app/app.component.ts (2,25): Cannot find module 'ts-test'.)"
2. edit tsconfig.app.json and save - make any change it doesn't matter
 - it compiles OK
3. edit app.component.ts and save - make any change it doesn't matter
 - you receive "ERROR in /Users/josephss/Documents/Code/ngWebpack/client/src/app/app.component.ts (2,25): Cannot find module 'ts-test'.)"
 
Absolute paths work fine, replacing "import { CliTest } from 'ts-test';" with "import { CliTest } from '../../../../ts-test';" in app.component.ts will work

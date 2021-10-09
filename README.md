# Casper QR Generator

## Demo
https://cy6erninja.github.io/casper-qr-code/

![Casper QR Generator](/overview.png "Casper QR Generator")

## Overview
#### This QR Generator has been created during [Casper hackathon](https://gitcoin.co/issue/casper-network/gitcoin-hackathon/28/100026610) on Gitcoin.
#### The Application can:
- Generate QR code using address, amount, memo and message
- Generate QR code for mobile and https://cspr.live .
- Download generated QR code.
- Upload QR code to https://imgbb.com to provide a link to the image.
- Connect to Casper signer Chrome extension to retreive wallet address.

**NOTE:** Provided demo version is not able to connect to signer due to the fact that signer does not inject *casperlabsHelper* into Window object (due to domain whitelist https://discord.com/channels/615596155992145953/818919006631100416/895849086169776240).

Also, imgbb.com account is not set up to last much longer than the hackathon goes. If you set up your own version of the app, please obtain your own imgbb token at https://api.imgbb.com/ .

## Installation

```
$ git clone git@github.com:cy6erninja/casper-qr-code.git

$ cd casper-qr-generator

$ yarn install

$ yarn start
```

Go to http://localhost:3000


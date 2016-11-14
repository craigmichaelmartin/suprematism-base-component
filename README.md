# Suprematism Base Component Repo

A repo to set up a component-centric repos.

#### Rationale
Angular-cli is app-centric. The suprematism library is full of components.
This repo was built with angular-cli, and then tweaked to be
component-centric. Using this repo allows for that tweaking to be
standardized and easy.

#### Usage
- Create new component repo in github.
- Clone it locally.
- Add this repository as a remote.
- Pull down master.
- Remove this repository as a remote.
- Run the npm install script.
- Run the npm convert script (with temp env vars for title, pascal, and kebab casing)
- Squash commits down to one (the convert script ends by opening interactive rebase)
  - Huh?: on the interactive rebase screen just change all the "pick"s to "s" except the top one
  - Preference: after doing so, a commit screen will diplay.
    Choose the "repository generated with base-component" commit message (last one listed)

For example, after creating the new component repo in github
```bash
git clone git@github.com:CINBCUniversal/suprematism-cool-thingy.git
cd suprematism-cool-thingy
git remote add base git@github.com:CINBCUniversal/suprematism-base-component.git
git pull -r base master
git remote remove base
npm install
TITLE_CASE='Cool Thingy' SENTENCE_CASE='cool thingy' PASCAL_CASE=CoolThingy KEBAB_CASE=cool-thingy npm run convert
```

#### Branching
This repo has a develop branch which keeps history, and a master branch which is a single commit rebase of develop.

#### Is this really the best way to do this?
Nope, not at all. But it is a way, while a more elegant way is developed.

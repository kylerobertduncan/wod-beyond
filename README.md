# World of Darkness – Character Builder

Inspired by [D&D Beyond](www.dndbeyond.com) I wanted to make an automated, intuitive character builder for `World of Darkness` TTRPGs, and particularly `Vampire: The Masquerade (5th Edition)` as a starting point. Differently from D&D Beyond I want the user to be able to interact with the character "sheet" in front of them, as I find marking dots in the WoD system to offer a lot of visual and tactile satisfaction.

This the third build of the project. After encountering structural issues in both the [character sheet elements](https://github.com/kylerobertduncan/wod-character-sheet), and [transfer of data](https://github.com/kylerobertduncan/wod-char-generator) to and from firebase, as well as collating and storing information for different users.

# Goals & Ideas
- [ ] build a blank character sheet from a template
  - [ ] build an array of character properties
    - [ ] add disciplines and other properties
    - [ ] add 'box' properties
      - [ ] how to allow for / v X in box?
  - [ ] create form sections populated by char-props
- [ ] allow user to fill in the sheet (hold values)
- [ ] save the character to firebase
- [ ] new character creates empty sheet in firebase
  - [ ] automate saves to firebase on change (instead of button)
- [ ] add a view mode for existing characters
  - [ ] load in 'view' mode, button to edit?
- [ ] add drop downs for limited options
- [ ] add specialities for skills

## Plan basic layout & navigation
- [x] add routing
- [ ] character list on page load

# Layout

## Landing Page
- [x] select user
- [x] new user

## Characters Page
- [ ] select character
- [ ] new character

## Character Editor

### creation phase
- [ ] creation rules active

#### Chronicle Settings
- [ ] chronicle name
- [ ] sea of time
- [ ] allowed resources (extra clans, etc.)

### edit/XP phase
- [ ] XP spend active

### view/play phase
- [ ] sheet locked
- [ ] info on click
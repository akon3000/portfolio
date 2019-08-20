const PREFIX_SECTION = '#'
export const HOME = 'home'
export const ABOUT = 'about'
export const SKILL = 'skill'
export const WORK_EXAMPLE = 'work-example'
export const FOOTER = 'footer'
export const bulletList = {
  [HOME]: `${PREFIX_SECTION}${HOME}`,
  [ABOUT]: `${PREFIX_SECTION}${ABOUT}`,
  [SKILL]: `${PREFIX_SECTION}${SKILL}`,
  [WORK_EXAMPLE]: `${PREFIX_SECTION}${WORK_EXAMPLE}`,
  [FOOTER]: `${PREFIX_SECTION}${FOOTER}`,
}
export const paddingLeft = 50
export const paddingRight = 30
export const bulletSize = 16
export const headerSize = (paddingLeft + paddingRight) + bulletSize
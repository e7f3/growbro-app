import { useMemo } from 'react'
import { useDataContext } from '../../../hooks/useDataContext'

export const useLogo = (type) => {
  const [className, isAlt, isLarge, isCropped, isFillTransparent] =
    useMemo(() => {
      switch (type) {
        case 'main':
          return ['logo logo--main', false, false, false, false]
        case 'main-white':
          return ['logo logo--main logo--white', false, false, false, true]
        case 'alt':
          return ['logo logo--alt', true, false, false, false]
        case 'alt-large':
          return ['logo logo--alt logo--alt-large', true, true, false, false]
        case 'alt-large-cropped':
          return ['logo logo--alt logo--alt-large', true, true, true, false]
        default:
          return ['logo', false, false, false, false]
      }
    }, [type])

  const logoKey = isAlt ? 'altLogo' : 'logo'
  const {
    data: {
      general: { [logoKey]: logoData },
    },
  } = useDataContext()

  return { className, logoData, isAlt, isLarge, isCropped, isFillTransparent }
}

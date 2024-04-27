import colors from './colors';
import pixel from './pixel';

export const INTER = {
  100: 'Inter_100Thin',
  200: 'Inter_200ExtraLight',
  300: 'Inter_300Light',
  400: 'Inter_400Regular',
  500: 'Inter_500Medium',
  600: 'Inter_600SemiBold',
  700: 'Inter_700Bold',
  800: 'Inter_800ExtraBold',
  900: 'Inter_900Black',
};

export function font(font, size, color = colors.blackColor) {
  return {
    // fontFamily: font,
    fontSize: pixel(size),
    color,
    fontWeight: font.toString(),
  };
}

export default font;

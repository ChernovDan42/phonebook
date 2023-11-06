import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

export const IconButtonThemeMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue('yellow.300', 'white');
  const bgColorThemeBtn = useColorModeValue('purple.300', '');
  const hoverThemeBtn = useColorModeValue(
    {
      _hover: { bgColor: 'purple.500' },
    },
    {
      _hover: { bgColor: 'purple.200' },
    }
  );
  return (
    <IconButton
      transition={'background-color 500ms'}
      _hover={hoverThemeBtn}
      bgColor={bgColorThemeBtn}
      ml="10px"
      aria-label="toggle theme"
      rounded="full"
      size="md"
      onClick={toggleColorMode}
      color={color}
      icon={
        colorMode === 'dark' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <FaMoon size="25px" />
          </motion.div>
        ) : (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <FaSun size="25px" />
          </motion.span>
        )
      }
    />
  );
};

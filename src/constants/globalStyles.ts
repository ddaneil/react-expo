// halloweenStyles.ts
import { StyleSheet } from 'react-native';

// Halloween Color Palette Constants
export const SPOOKY_COLORS = {
  pumpkin: '#FF7518',     // Classic Jack-o'-lantern Orange
  slime: '#39FF14',       // Eerie Glowing Neon Green
  phantom: '#8A2BE2',     // Deep Witchy Purple
  ghastly: '#7bfcfc',
  abyss: '#121212',       // Dark Haunted Background
  crypt: '#1F1F1F',       // Slightly lighter dark for cards/inputs
  ghost: '#F5F5F5',       // Bone White Text
  shadow: '#000000',      // Deep Shadows
};

export const halloweenStyles = StyleSheet.create({
  // Main background container (Dark haunted house vibes)
  container: {
    flex: 1,
    backgroundColor: SPOOKY_COLORS.abyss,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  scrollContainer: {
    flex: 1,
    backgroundColor: SPOOKY_COLORS.abyss,
    padding: 20,
  },

  // Main page title (Big, bold pumpkin orange)
  spookyHeader: {
    fontSize: 32,
    fontWeight: '900',
    color: SPOOKY_COLORS.pumpkin,
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 24,
    textAlign: 'center',
    // Text shadow creates a subtle glowing effect on iOS
    textShadowColor: SPOOKY_COLORS.pumpkin,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },

  // Subheaders (Eerie green glow)
  ghostlySubheader: {
    fontSize: 18,
    fontWeight: '600',
    color: SPOOKY_COLORS.slime,
    marginBottom: 16,
    textAlign: 'center',
  },

  // Container cards (The crypt)
  cryptCard: {
    backgroundColor: SPOOKY_COLORS.crypt,
    borderColor: SPOOKY_COLORS.phantom,
    borderWidth: 2,
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    // Eerie purple shadow drop
    shadowColor: SPOOKY_COLORS.phantom,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8, // Android shadow
  },

  // Paragraph text (Bone white)
  tombstoneText: {
    color: SPOOKY_COLORS.ghost,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },

  // Form Inputs (Dark mode input field with a purple border)
  cauldronInput: {
    backgroundColor: SPOOKY_COLORS.abyss,
    borderColor: SPOOKY_COLORS.phantom,
    borderWidth: 1.5,
    borderRadius: 8,
    padding: 14,
    color: SPOOKY_COLORS.ghost,
    fontSize: 16,
    marginBottom: 16,
  },

  // Active / Error input states
  cursedInputError: {
    borderColor: '#FF3333',
  },

  // Buttons: Primary Action (Pumpkin Orange)
  pumpkinButton: {
    backgroundColor: SPOOKY_COLORS.pumpkin,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: SPOOKY_COLORS.pumpkin,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
  },
  
  pumpkinButtonText: {
    color: SPOOKY_COLORS.abyss, // Dark text against bright orange
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  // Buttons: Secondary Interactive (Witchy Purple)
  phantomButton: {
    backgroundColor: 'transparent',
    borderColor: SPOOKY_COLORS.phantom,
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  phantomButtonText: {
    color: SPOOKY_COLORS.phantom,
    fontSize: 16,
    fontWeight: '700',
  },

  // Buttons: Secondary Interactive (Light Blue)
  ghastlyButton: {
    backgroundColor: 'transparent',
    borderColor: SPOOKY_COLORS.ghastly,
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: SPOOKY_COLORS.ghastly,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  
  ghastlyButtonText: {
    color: SPOOKY_COLORS.ghastly,
    fontSize: 16,
    fontWeight: '700',
  },

  // Dynamic button interaction effect
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }], // Slightly shrinks button on press
  },
  
  simpleLabel: {
    color: SPOOKY_COLORS.ghost,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});

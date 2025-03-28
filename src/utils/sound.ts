
// Simple utility to play a retro beep sound on hover
export const playBeepSound = () => {
  const beep = new Audio();
  beep.src = 'data:audio/wav;base64,UklGRpQGAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YXAGAACAgICAgICAgICAgICAgICAgICAgICAgICAf3hxeH+AfXZ1eHx6dnR5fYGFgoOKi42SkpKSi4iCfnp9gIaRl5ydm5aSjYmEgX+Ae3p/g4uXn6qutby2r6KWiXt1eH+Jl6GqrKyoo5+YlI+LiYaDgYKEiIyQlJibnp6empiTjomEgHx4d3p/hoySlpmbnJuYlJKQkI+PjIiAfXh0cXJ0d3t8e3p4dXRycHJ0dnp6eXh0cG1tbXBwbmtpZ2ZmZ2psb3J0dnp8fX59fHp4d3h6foOJkJWZnaCioqKgnpqXlZOTkpGPjYqGg4B+fHp4d3VzcXFwcXN1d3p9f4GCg4OCgYB/fn5/gIKEh4qMjY2NjYyLioqKiouMjIyLiYeGhYSEhIWGh4iJiYmIh4WEgoGBgoSGiYuNjo+PjYuJh4WEhIWGiYuOkJGRkI+Oj42Ni4qIh4aEgoB+fHt7e3x9fn+AgICAf35+fX18fHx9fn+BgoOEhYaFhYSEg4KCgoKDhIWGh4eHh4aGhYWEhIOCgYB/f3+AgICAgIB/f35+fn19fX5+f3+AgICAgH9+fXx8e3t7fH1+f4CAgIF/f359fHx8fH1+f4CAgIGBgYCAgH9/f39/f3+AgICAgICAgICAf39/f39/f4CAgICAgICAf39/f35+fn5/f3+AgICAgICAf39/fn5+fn9/f4CAgICAgIB/f39/fn5+fn9/f4CAgICAgIB/f39/fn5+fn9/f4CAgICAgICAf39/f39/f3+AgICAgICAgH9/f39/f39/gICAgICAgIB/f39/f39/f4CAgICAgICAgH9/f39/f3+AgICAgICAgIB/f39/f39/gICAgICAgICAf39/f39/f4CAgICAgICAgH9/f39/f3+AgICAgICAgIB/f39/f39/gICAgICAgICAf39/f39/f4CAgICAgICAgH9/f39/f3+AgICAgICAgIB/f39/f39/gICAgICAgICAf39/f39/f4CAgICAgICAgH9/f39/f3+AgICAgICAgIB/f39/f39/gICAgICAgICAf39/f39/f4CAgICAgICAgH9/f39/f3+AgICAgICAgIB/f39/f39/gICAgICAgICAf39/f39/f4CAgICAgICAgH9/f39/f39/gICAgICAgICAf39/f39/f4CAgICAgICAgH9/f39/f39/gICAgICAgICAf39/f39/f4CAgICAgICAgH9/f39/f39/gICAgICAgICAf39/f39/f4CAgICAgICAgH9/f39/f39/gICAgICAgICAf39/f39/f4CAgICAgICAgH9/f39/f39/gICAgICAgICAgH9/f39/f3+AgICAgICAgIB/f39/f39/gICAgICAgICAf39/f39/f4CAgICAgICAgH9/f39/f39/gICAgICAgICAf39/f39/f4CAgICAgICAgH9/f39/f39/gICAgICAgICAf39/f39/f4CAgICAgICAgH9/f39/f39/gICAgICAgICAf39/f39/f4CAgICAgICAgH9/f39/f39/gICAgICAgICAf39/f39/f4CAgICAgICAgH9/f39/f39/gICAgICAgICAf39/f39/f4CAgICAgICAgH9/f39/f39/gICAgICAgICAf39/f39/f4CA';
  
  try {
    beep.volume = 0.2; // Adjust volume to be subtle
    beep.play().catch(() => {
      // Catch any autoplay restrictions
      console.log('Audio play prevented by browser policy');
    });
  } catch (e) {
    console.error('Error playing sound:', e);
  }
};

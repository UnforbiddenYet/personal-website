import { Alert95 } from "./Alert95";
import icon from '../assets/help_question_mark.ico';


export function TaskbarInfo({ onClose }: { onClose: () => void }) {
  return (
    <Alert95
      title="About This Site"
      icon={icon}
      onClose={onClose}
    >
      <p style={{ margin: 0 }}>
        This website recreates the aesthetic of Windows 95, combining retro design with modern web technologies.
      </p>
      <p>
        Built with React, TypeScript, and custom CSS.
      </p>
    </Alert95>
  );
}
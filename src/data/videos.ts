export interface Video {
  id: string;
  title: string;
  description: string;
  videoSrc: string;
  duration: string;
}

export interface VideoCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  videoCount: number;
  videos: Video[];
}

export const videoCategories: VideoCategory[] = [
  {
    id: "blender",
    title: "Blender",
    description: "3D modeling, sculpting & rendering",
    icon: "◆",
    color: "text-accent",
    videoCount: 3,
    videos: [
      {
        id: "blender-env",
        title: "Environment Modeling Timelapse",
        description: "Full environment creation from blockout to final render in Blender",
        videoSrc: "/videos/blender-env.mp4",
        duration: "04:32",
      },
      {
        id: "blender-char",
        title: "Character Modeling Process",
        description: "Stylized character creation workflow in Blender",
        videoSrc: "/videos/blender-char.mp4",
        duration: "06:15",
      },
      {
        id: "blender-hard",
        title: "Hard Surface Modeling",
        description: "Sci-fi weapon modeling with boolean operations",
        videoSrc: "/videos/blender-hard.mp4",
        duration: "03:48",
      },
    ],
  },
  {
    id: "unreal",
    title: "Unreal Engine",
    description: "Real-time environments & lighting",
    icon: "◎",
    color: "text-blue-400",
    videoCount: 3,
    videos: [
      {
        id: "ue5-env",
        title: "UE5 Environment Walkthrough",
        description: "Nanite & Lumen powered environment showcase",
        videoSrc: "/videos/ue5-env.mp4",
        duration: "02:45",
      },
      {
        id: "ue5-lighting",
        title: "Lighting Breakdown",
        description: "Atmospheric lighting setup in Unreal Engine 5",
        videoSrc: "/videos/ue5-lighting.mp4",
        duration: "03:20",
      },
      {
        id: "ue5-level",
        title: "Level Design Timelapse",
        description: "Complete level blockout to final art pass",
        videoSrc: "/videos/ue5-level.mp4",
        duration: "05:10",
      },
    ],
  },
  {
    id: "rigging",
    title: "Rigging & Animation",
    description: "Character rigs & animation breakdowns",
    icon: "⟡",
    color: "text-orange-400",
    videoCount: 3,
    videos: [
      {
        id: "rig-biped",
        title: "Biped Rig Setup",
        description: "Complete humanoid rig with IK/FK switching in Maya",
        videoSrc: "/videos/rig-biped.mp4",
        duration: "07:22",
      },
      {
        id: "rig-creature",
        title: "Creature Rigging",
        description: "Quadruped rig with custom spine and tail dynamics",
        videoSrc: "/videos/rig-creature.mp4",
        duration: "05:55",
      },
      {
        id: "anim-walk",
        title: "Walk Cycle Animation",
        description: "Natural walk cycle with weight shift and follow-through",
        videoSrc: "/videos/anim-walk.mp4",
        duration: "02:30",
      },
    ],
  },
  {
    id: "concept",
    title: "Concept Art",
    description: "Digital painting & illustration process",
    icon: "✦",
    color: "text-yellow-400",
    videoCount: 2,
    videos: [
      {
        id: "concept-env",
        title: "Environment Concept",
        description: "Matte painting process from sketch to final",
        videoSrc: "/videos/concept-env.mp4",
        duration: "08:15",
      },
      {
        id: "concept-char",
        title: "Character Design",
        description: "Character concept exploration and final design",
        videoSrc: "/videos/concept-char.mp4",
        duration: "06:40",
      },
    ],
  },
  {
    id: "substance",
    title: "Texturing",
    description: "PBR materials & texture workflows",
    icon: "▣",
    color: "text-accent-2",
    videoCount: 2,
    videos: [
      {
        id: "sub-pbr",
        title: "PBR Material Creation",
        description: "Full PBR texture set creation in Substance Painter",
        videoSrc: "/videos/sub-pbr.mp4",
        duration: "05:30",
      },
      {
        id: "sub-proc",
        title: "Procedural Textures",
        description: "Creating tileable materials in Substance Designer",
        videoSrc: "/videos/sub-proc.mp4",
        duration: "04:55",
      },
    ],
  },
];

export function getVideoCategoryById(id: string): VideoCategory | undefined {
  return videoCategories.find((cat) => cat.id === id);
}

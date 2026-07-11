export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  video?: string;
  status: "COMPLETED" | "IN PROGRESS" | "CONCEPT";
}

export interface ProjectCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  projectCount: number;
  projects: Project[];
}

export const categories: ProjectCategory[] = [
  {
    id: "unreal",
    title: "Unreal Engine Works",
    description: "Real-time environments built in Unreal Engine 5",
    icon: "U",
    color: "text-blue-400",
    projectCount: 3,
    projects: [
      {
        id: "From Dreams to Reality",
        title: "From Dreams to Reality",
        description:
          "Narrative first-person cinematic featuring motion capture cleanup, Sequencer animation, lighting and cinematic storytelling.",
        tags: ["Unreal Engine 5", "Cinematics", "Motion Capture", "Lighting"],
        video: "/videos/dreams-to-reality.mp4",
        status: "COMPLETED",
      },
      {
        id: "His Last Memory",
        title: "His Last Memory",
        description:
          "Emotional cinematic built using MetaHumans with advanced camera choreography and cinematic lighting.",
        tags: ["Unreal Engine 5", "MetaHumans", "Lighting and Animation", "Storytelling"],
        video: "/videos/His_Last_Memory.mov",
        status: "COMPLETED",
      },
      {
        id: "Blood in the Basement",
        title: "Blood in the Basement",
        description:
          "Underground fighting arena featuring environment creation, VFX, camera blocking and cinematic production.",
        tags: ["Unreal Engine", "Environment and Lighting", "VFX", "Cinematics"],
        video: "/videos/Blood in the Basement.mp4",
        status: "CONCEPT",
      },
    ],
  },
  {
    id: "Unity",
    title: "Unity Engine Works",
    description: "Real-time experiences built in Unity",
    icon: "◎",
    color: "text-accent",
    projectCount: 3,
    projects: [
      {
        id: "Magic Guardians VR",
        title: "Magic Guardians VR",
        description:
          "Commercial VR fantasy title released in Japan. Created 40+ gameplay animations, combat animations, locomotion and character rigging.",
        tags: ["Unity", "VR", "Gameplay Animation", "Character Rigging"],
        video: "projects/unity/magic-guardians-vr.mp4",
        status: "COMPLETED",
      },
      {
        id: "VR Horror Game",
        title: "VR Horror Game",
        description:
          "Main animator responsible for the complete animation pipeline including gameplay animation, cinematics, rigging, player interactions and Unreal implementation.",
        tags: ["Unity", "VR", "Cinematics", "Animation"],
        status: "COMPLETED",
      },
      {
        id: "VR Supermarket Experience",
        title: "VR Supermarket Experience",
        description:
          "Complete VR educational experience including environment, character animation, interaction systems and lighting.",
        tags: ["Unity Engine", "VR", "Cinematics", "Character Animation"],
        status: "COMPLETED",
      },
    ],
  },
  {
    id: "3d-modeling",
    title: "3D Assets",
    description: "Characters, props & environment pieces",
    icon: "◆",
    color: "text-accent-2",
    projectCount: 1,
    projects: [
      {
        id: "Medieval House Environment",
        title: "Medieval House Environment",
        description:
          "Production-ready medieval environment modeled in Maya, textured using Substance Painter and rendered in Unreal Engine.",
        tags: ["Maya", "Environment Art", "Substance Painter", "PBR Graph"],
        video: "/videos/Medieval_House.mp4",
        status: "COMPLETED",
      },
    ],
  },
  {
    id: "rigging",
    title: "Rigging & Animation",
    description: "Character rigs & animation work",
    icon: "⟠",
    color: "text-orange-400",
    projectCount: 3,
    projects: [
      {
        id: "JackD Storytelling Content",
        title: "JackD Storytelling Content",
        description:
          "Produced cinematic character animations, camera performances, and storytelling sequences while managing the complete animation workflow from concept to final render.",
        tags: ["Character Animation", "Cinematics", "Storytelling", "Rendering"],
        video: "projects/rigging/jackd-storytelling.mp4",
        status: "COMPLETED",
      },
      {
        id: "Educational VR Awareness",
        title: "Educational VR Awareness",
        description:
          "Created and rigged original characters with idle, walk, and interaction animations while ensuring smooth integration into a real-time VR educational environment.",
        tags: ["Character Rigging", "VR", "Walk Cycle", "Advanced Rigging"],
        status: "IN PROGRESS",
      },
      {
        id: "facial-rig",
        title: "Facial Animation System",
        description:
          "Blend shape based facial rig with viseme support, corrective shapes, and FACS-based setup.",
        tags: ["Maya", "Blend Shapes", "Facial Animation", "Mocap"],
        video: "/videos/MetaHuman_FaceAnimation.mp4",
        status: "COMPLETED",
      },
      {
        id: "facial-details",
        title: "Facial Animation",
        description:
          "Blend shape based facial rig with viseme support and corrective shape in close up view.",
        tags: ["Maya", "Blend Shapes", "Facial Animation"],
        video: "/videos/Eye_Close_up_Shot.mp4",
        status: "COMPLETED",
      },
    ],
  },
  {
    id: "Storytelling",
    title: "Storytelling",
    description: "Storytelling and cinematic works.",
    icon: "S",
    color: "text-red-400",
    projectCount: 3,
    projects: [
      {
        id: "Sister's Paperscript",
        title: "Sister's Paperscript",
        description:
          "An innocent message from my little sister exposed a shocking secret.",
        tags: ["Video", "Writing", "Storytelling"],
        video: "/videos/Sister_PaperScript_Final_Render.mp4",
        status: "COMPLETED",
      },
      {
        id: "The Secret Behind 37 Uncashed Checks",
        title: "The Secret Behind 37 Uncashed Checks",
        description:
          "True kindness expects nothing in return.",
        tags: ["Storytelling", "Short Film", "Facial Animation"],
        video: "/videos/Father_Friend_37_Cheques_Final.mp4",
        status: "COMPLETED",
      },
    ],
  },
  {
    id: "LevelDesign",
    title: "Level Design",
    description: "Level design works.",
    icon: "★",
    color: "text-violet-400",
    projectCount: 3,
    projects: [
      {
        id: "Castle on a cliff",
        title: "Castle on a cliff.",
        description:
          "A Castle preserved in time up on the cliff.",
        tags: ["Unreal Engine", "Level Design", "Environment Design"],
        video: "/videos/Castle Cliff Environment.mp4",
        status: "COMPLETED",
      },
      {
        id: "Dark GraveYard!",
        title: "Dark GraveYard!",
        description:
          "A horror-themed environment art project focusing on atmosphere, lighting, and environment tone.",
        tags: ["Level Design", "Environment Design"],
        video: "/videos/GraveYard_video.mp4",
        status: "COMPLETED",
      },
    ],
  },
  {
    id: "ShortContents",
    title: "Short Contents",
    description: "Short Content works.",
    icon: "⟡",
    color: "text-cyan-400",
    projectCount: 3,
    projects: [
      {
        id: "Cool_Porsche",
        title: "Cool Porsche.",
        description:
          "A Porsche 911 GT3.",
        tags: ["Unreal Engine", "Camera Animation", "Super Car"],
        video: "/videos/Porshe Car.mov",
        status: "COMPLETED",
      },
      {
        id: "Chikiri Dance",
        title: "Chikiri Dance",
        description:
          "Video capture cleanup of an indian classical dance performed by characters.",
        tags: ["Short content", "Camera Animation"],
        video: "/videos/Chikiri_Dance_VIdeo.mp4",
        status: "COMPLETED",
      },
      {
        id: "Super Car",
        title: "Super Car",
        description:
          "A Super Car in middle of the forest environment.",
        tags: ["Short content", "Camera Animation", "Super Car"],
        video: "/videos/SuperCar.mp4",
        status: "COMPLETED",
      },
    ],
  },
];

export function getCategoryById(id: string): ProjectCategory | undefined {
  return categories.find((cat) => cat.id.toLowerCase() === id.toLowerCase());
}

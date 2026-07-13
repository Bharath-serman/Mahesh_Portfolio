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
  thumbnail?: string;
  projects: Project[];
}

export const categories: ProjectCategory[] = [
  {
    id: "unreal",
    title: "3D-Short films",
    description: "3D Short films and animations",
    icon: "",
    color: "text-blue-400",
    projectCount: 6,
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
        status: "COMPLETED",
      },
      {
        id: "The Basement Dweller",
        title: "Basement Dweller",
        description:
          "A terrifying short horror animation featuring a sinister, smiling entity.",
        tags: ["Camera Animation", "Cinematics", "Horror"],
        video: "/videos/OM_Horror.mp4",
        status: "COMPLETED",
      },
      {
        id: "Dungeon",
        title: "Dungeon_Environment",
        description:
          "A tense cinematic exploration through a dimly lit, torch-fed stone dungeon.",
        tags: ["Cinematics", "Storytelling"],
        video: "/videos/SF_Third003_Dungeon.mp4",
        status: "COMPLETED",
      },
      {
        id: "Medieval_Era_Exploration",
        title: "Medieval Era Exploration",
        description:
          "A scenic cinematic third-person view of a character exploring a vast medieval castle estate.",
        tags: ["Unreal Engine", "Cinematics", "shortcontent"],
        video: "/videos/Medieval Era Exploration.mp4",
        status: "COMPLETED",
      },
    ],
  },
  {
    id: "Unity",
    title: "Game Animations",
    description: "Game Animations for VR Games.",
    icon: "",
    color: "text-accent",
    projectCount: 3,
    thumbnail: "/images/game-animations.jpg",
    projects: [
      {
        id: "Magic Guardians VR",
        title: "Magic Guardians VR",
        description:
          "Commercial VR fantasy title released in Japan. Created 40+ gameplay animations, combat animations, locomotion and character rigging.",
        tags: ["Unity", "VR", "Gameplay Animation", "Character Rigging"],
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
    id: "rigging",
    title: "Mocap Animations",
    description: "Character Mocap Works",
    icon: "",
    color: "text-orange-400",
    projectCount: 2,
    projects: [
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
    icon: "",
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
      {
        id: "Anonymous_Donor",
        title: "Anonymous Donor",
        description:
          "A moving short story about a speaker who discovers the hidden, life-long sacrifices their father made to secretly fund their university education.",
        tags: ["Storytelling", "Drama", "Inspirational"],
        video: "/videos/AnonymusDonar_FinalRender.mp4",
        status: "COMPLETED",
      }
    ],
  },
  {
    id: "LevelDesign",
    title: "Level Design",
    description: "Level design works.",
    icon: "",
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
    id: "ShortContents",
    title: "Short Contents",
    description: "Short Content works.",
    icon: "",
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

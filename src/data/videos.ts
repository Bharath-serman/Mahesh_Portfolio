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
    id: "unreal",
    title: "Unreal Engine",
    description: "Real-time cinematics & environments built in Unreal Engine 5",
    icon: "U",
    color: "text-blue-400",
    videoCount: 3,
    videos: [
      {
        id: "dreams-to-reality",
        title: "From Dreams to Reality",
        description: "Narrative first-person cinematic featuring motion capture cleanup, Sequencer animation, lighting and cinematic storytelling.",
        videoSrc: "/videos/dreams-to-reality.mp4",
        duration: "",
      },
      {
        id: "his-last-memory",
        title: "His Last Memory",
        description: "Emotional cinematic built using MetaHumans with advanced camera choreography and cinematic lighting.",
        videoSrc: "/videos/His_Last_Memory.mov",
        duration: "",
      },
      {
        id: "blood-in-the-basement",
        title: "Blood in the Basement",
        description: "Underground fighting arena featuring environment creation, VFX, camera blocking and cinematic production.",
        videoSrc: "/videos/Blood in the Basement.mp4",
        duration: "",
      },
    ],
  },
  {
    id: "Unity",
    title: "Unity Engine",
    description: "Real-time experiences built in Unity",
    icon: "◎",
    color: "text-accent",
    videoCount: 1,
    videos: [
      {
        id: "magic-guardians-vr",
        title: "Magic Guardians VR",
        description: "Commercial VR fantasy title released in Japan. Created 40+ gameplay animations, combat animations, locomotion and character rigging.",
        videoSrc: "projects/unity/magic-guardians-vr.mp4",
        duration: "",
      },
    ],
  },
  {
    id: "rigging",
    title: "Rigging & Animation",
    description: "Character rigs & animation work",
    icon: "⟠",
    color: "text-orange-400",
    videoCount: 3,
    videos: [
      {
        id: "jackd-storytelling",
        title: "JackD Storytelling Content",
        description: "Produced cinematic character animations, camera performances, and storytelling sequences while managing the complete animation workflow from concept to final render.",
        videoSrc: "projects/rigging/jackd-storytelling.mp4",
        duration: "",
      },
      {
        id: "facial-animation-system",
        title: "Facial Animation System",
        description: "Blend shape based facial rig with viseme support, corrective shapes, and FACS-based setup.",
        videoSrc: "/videos/MetaHuman_FaceAnimation.mp4",
        duration: "",
      },
      {
        id: "facial-animation",
        title: "Facial Animation",
        description: "Blend shape based facial rig with viseme support and corrective shape in close up view.",
        videoSrc: "/videos/Eye_Close_up_Shot.mp4",
        duration: "",
      },
    ],
  },
  {
    id: "3d-modeling",
    title: "3D Assets",
    description: "Characters, props & environment pieces",
    icon: "◆",
    color: "text-accent-2",
    videoCount: 1,
    videos: [
      {
        id: "medieval-house",
        title: "Medieval House Environment",
        description: "Production-ready medieval environment modeled in Maya, textured using Substance Painter and rendered in Unreal Engine.",
        videoSrc: "/videos/Medieval_House.mp4",
        duration: "",
      },
    ],
  },
  {
    id: "Storytelling",
    title: "Storytelling",
    description: "Storytelling and cinematic works",
    icon: "S",
    color: "text-red-400",
    videoCount: 2,
    videos: [
      {
        id: "sisters-paperscript",
        title: "Sister's Paperscript",
        description: "An innocent message from my little sister exposed a shocking secret.",
        videoSrc: "/videos/Sister_PaperScript_Final_Render.mp4",
        duration: "",
      },
      {
        id: "37-checks",
        title: "The Secret Behind 37 Uncashed Checks",
        description: "True kindness expects nothing in return.",
        videoSrc: "/videos/Father_Friend_37_Cheques_Final.mp4",
        duration: "",
      },
    ],
  },
  {
    id: "LevelDesign",
    title: "Level Design",
    description: "Level design works",
    icon: "★",
    color: "text-violet-400",
    videoCount: 2,
    videos: [
      {
        id: "castle-cliff",
        title: "Castle on a Cliff",
        description: "A Castle preserved in time up on the cliff.",
        videoSrc: "/videos/Castle Cliff Environment.mp4",
        duration: "",
      },
      {
        id: "graveyard",
        title: "Dark GraveYard!",
        description: "A horror-themed environment art project focusing on atmosphere, lighting, and environment tone.",
        videoSrc: "/videos/GraveYard_video.mp4",
        duration: "",
      },
    ],
  },
  {
    id: "ShortContents",
    title: "Short Contents",
    description: "Short content works",
    icon: "⟡",
    color: "text-cyan-400",
    videoCount: 3,
    videos: [
      {
        id: "cool-porsche",
        title: "Cool Porsche",
        description: "A Porsche 911 GT3.",
        videoSrc: "/videos/Porshe Car.mov",
        duration: "",
      },
      {
        id: "chikiri-dance",
        title: "Chikiri Dance",
        description: "Video capture cleanup of an indian classical dance performed by characters.",
        videoSrc: "/videos/Chikiri_Dance_VIdeo.mp4",
        duration: "",
      },
      {
        id: "super-car",
        title: "Super Car",
        description: "A Super Car in middle of the forest environment.",
        videoSrc: "/videos/SuperCar.mp4",
        duration: "",
      },
    ],
  },
];

export function getVideoCategoryById(id: string): VideoCategory | undefined {
  return videoCategories.find((cat) => cat.id === id);
}

export type Subsection = {
    text: string;
    image?: string;
    imageMaxWidth?: string;
};

export type Block = {
    title: string;
    subsections: Subsection[];
};

export type Project = {
    slug: string;
    title: string;
    role: string;
    date: string;
    teamsize: string;
    engine: string;
    link: string;
    short: string;
    blocks?: Block[];
    images?: string[];
};

const projectsList: Project[] = [
    {
        slug: "isabel",
        title: "ISABEL'S SOUL COMPASS",
        role: "UI Programmer",
        date: "4 Weeks",
        teamsize: "Individual Contribution",
        engine: "Unity",
        link: "https://store.steampowered.com/app/3754290/Pitaya/",
        short: "Isabel is a 2D roguelite top-down shooter, where players descend the layers of Hell to deliver divine justice to the monsters residing there.\n\nI joined this team in the early stages of its development, and I focused on improving and implementing the game's UI infastructure.",
        blocks: [
            {
                title: "THE PROBLEM",
                subsections: [
                    {
                        text: "The original HUD was inherited from an early prototype: functional, but cluttered, with no clear visual hierarchy. Players were presented with a lot of information (spatial position, resource state, and more), but it lacked any cohesion with the rest of the game's theming.",
                    },
                    {
                        text: "I worked with the team's UI/UX designer to develop a mockup that would tackle the two elements needing the most rework: the minimap and stage progression. Each had a distinct core problem, and each demanded a different kind of solution.",
                        image: "/projectPictures/Isabel/compass_mockup.png",
                        imageMaxWidth: "40%",
                    },
                ],
            },
            {
                title: "THE MINIMAP",
                subsections: [
                    {
                        text: "Because the game's levels were procedurally generated, players needed a way to track their location that was both legible and reliable across infinitely varied layouts.\n\nI evaluated a few approaches before settling on a final implementation:\n\n• Secondary camera rendering to a render texture: visually cluttered, and didn't give me the control I needed over readability.\n• A duplicate tilemap rendering exclusively to a minimap camera: ineffective given the constraints of the procedural tile system.",
                    },
                    {
                        text: "The solution I landed on used a secondary camera that swapped the sharedMaterial reference on the level's tilemaps between the default and a custom minimap shader during that camera's render pass.\n\nSince floors and terrain were already split across two separate tilemaps, I could apply the material at the layer level and drive distinct colors based on each tile's sorting layer, giving the minimap clean, immediately distinguishable colors for walkable space versus terrain.",
                        image: "/projectPictures/Isabel/compass_centered.png",
                    },
                    {
                        text: "Player, enemy, and portal icons were handled with an additional renderer for each, rendering a dedicated icon sprite and included in the minimap camera's culling mask. This let the minimap stay fully decoupled from the main game view without duplicating scene logic.",
                    },
                ],
            },
            {
                title: "STAGE PROGRESSION",
                subsections: [
                    {
                        text: "To advance to the next stage, players needed to defeat enough enemies to fill a meter; once full, a teleporter to the next stage would be revealed.\n\nThe first pass used a simple mask-and-fill approach. It worked, but it was visually flat and didn't capture the intended feel: a meter filling with the souls of the damned.",
                        image: "/projectPictures/Isabel/meter_fill_loop.gif",
                    },
                    {
                        text: "To get there, I added motion to the fill shader so the meter felt alive, like it was filled with a volatile, churning liquid, and added a glowing aura around the compass once the meter filled, making it immediately clear when players could progress.",
                        image: "/projectPictures/Isabel/compass_glow_only_loop.gif",
                    },
                    {
                        text: "The liquid effect initially clashed with the game's pixel-art style, so I added a pixelation pass to the fill shader to bring the two visual languages together into one cohesive look.",
                        image: "/projectPictures/Isabel/meter_fill_glow_loop.gif",
                    },
                ],
            },
            {
                title: "THE COMPASS",
                subsections: [
                    {
                        text: "Playtesting surfaced a new problem: players could read the map easily and knew when they'd unlocked progression, but struggled to actually locate the unlocked teleporter. This led to frustrating backtracking instead of forward momentum.",
                    },
                    {
                        text: "To solve this, I added a compass overlay on the minimap. Once the meter filled, the compass would appear and point players directly toward the level's teleporter, closing the gap between knowing you can progress and finding how to.",
                        image: "/projectPictures/Isabel/compass_needle_loop.gif",
                    },
                ],
            },
            {
                title: "OUTCOME",
                subsections: [
                    {
                        text: "Together, these changes transformed this corner of the HUD from a set of competing, disconnected elements into a cohesive system: one that communicated essential information at a glance while still feeling like a natural part of the game's world.",
                        image: "/projectPictures/Isabel/hud_live_gameplay.gif",
                        imageMaxWidth: "35%",
                    },
                ],
            },
        ],
    },
    {
        slug: "project-ether",
        title: "PROJECT: ETHER",
        role: "UI/Gameplay Programmer",
        date: "August 2023 - March 2024",
        teamsize: "Unreal Engine 5",
        engine: "Unreal Engine 5",
        link: "https://store.steampowered.com/app/2956670/Project_Ether/?beta=0",
        short: "Project: Ether is an Action-Stealth game where players harness magical abilities to fight back against an oppressive force. Made in Unreal Engine 5 as a capstone project for UCI's Game Design & Interactive Media major, alongside artists from the Laguna College of Art and Design.\n\nI handled all UI programming for the project, working directly with UI designers to implement their Figma designs into Unreal's UMG system and connecting live game data to each widget. I also built the game's Save & Load system, Objective system, and the full Settings menu, including key remapping, graphics options, and colorblind support.",
        images: [
            "/projectPictures/Ether/ETH6.png",
            "/projectPictures/Ether/ETH7.png",
            "/projectPictures/Ether/ETH3.png",
            "/projectPictures/Ether/ETH4.png",
            "/projectPictures/Ether/ETH5.png",
        ],
    },
    {
        slug: "pitaya",
        title: "PITAYA!",
        role: "UI Programmer",
        date: "October 2024 - Present",
        teamsize: "Unreal Engine 5",
        engine: "Unreal Engine 5",
        link: "https://store.steampowered.com/app/3754290/Pitaya/",
        short: "Pitaya! is a 3rd-Person Action RPG about a cursed girl who must eat to survive. I joined the team as the sole UI programmer, working closely with the team's designers and artists to design and implement all UI elements, from HUD to menus, with full compatibility for both gamepad and keyboard & mouse, including gamepad brand detection.",
        images: [
            "/projectPictures/Pitaya/Pitaya_HUD.png",
            "/projectPictures/Pitaya/Pitaya_Settings.png",
            "/projectPictures/Pitaya/Pitaya_Skill_Tree.png",
        ],
    },
];

export default projectsList;

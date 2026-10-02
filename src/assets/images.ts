/**
 * Static image asset bridge for Atelier Allan Paysage.
 * All generated images are stored in both /public/images and /src/assets/images
 * ensuring they remain permanently connected and bundled in development and production.
 */

// Direct imports for Vite bundler
import heroGardenImg from './images/hero_drome_garden.jpg';
import gardenCreationImg from './images/garden_creation_showcase.jpg';
import maintenanceLawnImg from './images/maintenance_lawn_hedge.jpg';
import terraceStoneImg from './images/terrace_stone_paving.jpg';
import fenceWallImg from './images/fence_wall_project.jpg';
import wateringSystemImg from './images/watering_irrigation_system.jpg';
import pruningTreeImg from './images/pruning_tree_care.jpg';
import teamPortraitImg from './images/team_craftsmen_portrait.jpg';

export const IMAGES = {
  heroGarden: heroGardenImg || '/images/hero_drome_garden.jpg',
  gardenCreation: gardenCreationImg || '/images/garden_creation_showcase.jpg',
  maintenanceLawn: maintenanceLawnImg || '/images/maintenance_lawn_hedge.jpg',
  terraceStone: terraceStoneImg || '/images/terrace_stone_paving.jpg',
  fenceWall: fenceWallImg || '/images/fence_wall_project.jpg',
  wateringSystem: wateringSystemImg || '/images/watering_irrigation_system.jpg',
  pruningTree: pruningTreeImg || '/images/pruning_tree_care.jpg',
  teamPortrait: teamPortraitImg || '/images/team_craftsmen_portrait.jpg',
};

export default IMAGES;

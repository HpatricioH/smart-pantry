CREATE TABLE `pantry-recipe_ingredients` (
	`id` text PRIMARY KEY NOT NULL,
	`recipe_id` text NOT NULL,
	`line` text NOT NULL,
	`order` integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `pantry-recipe_instructions` (
	`id` text PRIMARY KEY NOT NULL,
	`recipe_id` text NOT NULL,
	`step` text NOT NULL,
	`order` integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `pantry-recipe_tags` (
	`recipe_id` text NOT NULL,
	`tag_id` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `pantry-tags` (
	`id` text PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`label` text NOT NULL
);
--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_pantry-pantry` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`name` text NOT NULL,
	`quantity` integer DEFAULT 1,
	`image` text,
	`category` text,
	`created_at` integer DEFAULT '"2025-09-13T03:42:00.179Z"'
);
--> statement-breakpoint
INSERT INTO `__new_pantry-pantry`("id", "user_id", "name", "quantity", "image", "category", "created_at") SELECT "id", "user_id", "name", "quantity", "image", "category", "created_at" FROM `pantry-pantry`;--> statement-breakpoint
DROP TABLE `pantry-pantry`;--> statement-breakpoint
ALTER TABLE `__new_pantry-pantry` RENAME TO `pantry-pantry`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
ALTER TABLE `pantry-recipes` ADD `title` text;
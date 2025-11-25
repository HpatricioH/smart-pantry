ALTER TABLE `pantry-recipe_instructions` RENAME TO `pantry-recipe_steps`;--> statement-breakpoint
CREATE TABLE `pantry-ai_recipe_generation_logs` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`request_type` text NOT NULL,
	`input_snapshot` text NOT NULL,
	`raw_response` text,
	`parsed_recipe_id` text,
	`error` text,
	`created_at` integer DEFAULT (strftime('%s','now')) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `pantry-recipe_tags_on_recipes` (
	`recipe_id` text NOT NULL,
	`tag_id` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `pantry-user_recipe_preferences` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`recipe_id` text NOT NULL,
	`liked` integer,
	`rating` integer,
	`saved` integer DEFAULT false NOT NULL,
	`notes` text NOT NULL
);
--> statement-breakpoint
ALTER TABLE `pantry-recipe_steps` ADD `order_index` integer;--> statement-breakpoint
ALTER TABLE `pantry-recipe_steps` ADD `text` text NOT NULL;--> statement-breakpoint
ALTER TABLE `pantry-recipe_steps` ADD `timer_seconds` integer;--> statement-breakpoint
ALTER TABLE `pantry-recipe_steps` DROP COLUMN `step`;--> statement-breakpoint
ALTER TABLE `pantry-recipe_steps` DROP COLUMN `order`;--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_pantry-pantry` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`name` text NOT NULL,
	`quantity` text DEFAULT '1',
	`unit` integer DEFAULT 0,
	`image` text,
	`category` text,
	`expiresInDays` integer,
	`lowStock` integer DEFAULT true,
	`created_at` integer DEFAULT '"2025-11-25T04:28:37.064Z"'
);
--> statement-breakpoint
INSERT INTO `__new_pantry-pantry`("id", "user_id", "name", "quantity", "unit", "image", "category", "expiresInDays", "lowStock", "created_at") SELECT "id", "user_id", "name", "quantity", "unit", "image", "category", "expiresInDays", "lowStock", "created_at" FROM `pantry-pantry`;--> statement-breakpoint
DROP TABLE `pantry-pantry`;--> statement-breakpoint
ALTER TABLE `__new_pantry-pantry` RENAME TO `pantry-pantry`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_pantry-recipes` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`source_type` text DEFAULT 'ai_generated' NOT NULL,
	`status` text DEFAULT 'draft' NOT NULL,
	`total_time` text,
	`prep_time` text,
	`cook_time` text,
	`servings` integer NOT NULL,
	`difficulty` text,
	`image` text,
	`liked` integer DEFAULT false NOT NULL,
	`primary_category_id` text,
	`created_at` integer DEFAULT (strftime('%s','now')) NOT NULL,
	`updated_at` integer DEFAULT (strftime('%s', 'now')) NOT NULL,
	`calories` integer
);
--> statement-breakpoint
INSERT INTO `__new_pantry-recipes`("id", "user_id", "title", "description", "source_type", "status", "total_time", "prep_time", "cook_time", "servings", "difficulty", "image", "liked", "primary_category_id", "created_at", "updated_at", "calories") SELECT "id", "user_id", "title", "description", "source_type", "status", "total_time", "prep_time", "cook_time", "servings", "difficulty", "image", "liked", "primary_category_id", "created_at", "updated_at", "calories" FROM `pantry-recipes`;--> statement-breakpoint
DROP TABLE `pantry-recipes`;--> statement-breakpoint
ALTER TABLE `__new_pantry-recipes` RENAME TO `pantry-recipes`;--> statement-breakpoint
ALTER TABLE `pantry-recipe_ingredients` ADD `pantry_product_id` text;--> statement-breakpoint
ALTER TABLE `pantry-recipe_ingredients` ADD `name` text NOT NULL;--> statement-breakpoint
ALTER TABLE `pantry-recipe_ingredients` ADD `quantity` real;--> statement-breakpoint
ALTER TABLE `pantry-recipe_ingredients` ADD `unit` text;--> statement-breakpoint
ALTER TABLE `pantry-recipe_ingredients` ADD `option` integer DEFAULT false NOT NULL;--> statement-breakpoint
ALTER TABLE `pantry-recipe_ingredients` ADD `note` text;--> statement-breakpoint
ALTER TABLE `pantry-recipe_ingredients` DROP COLUMN `line`;--> statement-breakpoint
ALTER TABLE `pantry-recipe_ingredients` DROP COLUMN `order`;--> statement-breakpoint
CREATE TABLE `__new_pantry-recipe_tags` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_pantry-recipe_tags`("id", "name") SELECT "id", "name" FROM `pantry-recipe_tags`;--> statement-breakpoint
DROP TABLE `pantry-recipe_tags`;--> statement-breakpoint
ALTER TABLE `__new_pantry-recipe_tags` RENAME TO `pantry-recipe_tags`;--> statement-breakpoint
CREATE UNIQUE INDEX `pantry-recipe_tags_name_unique` ON `pantry-recipe_tags` (`name`);
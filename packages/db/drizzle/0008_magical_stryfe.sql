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
	`created_at` integer DEFAULT '"2025-12-30T05:26:06.655Z"'
);
--> statement-breakpoint
INSERT INTO `__new_pantry-pantry`("id", "user_id", "name", "quantity", "unit", "image", "category", "expiresInDays", "lowStock", "created_at") SELECT "id", "user_id", "name", "quantity", "unit", "image", "category", "expiresInDays", "lowStock", "created_at" FROM `pantry-pantry`;--> statement-breakpoint
DROP TABLE `pantry-pantry`;--> statement-breakpoint
ALTER TABLE `__new_pantry-pantry` RENAME TO `pantry-pantry`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_pantry-recipe_ingredients` (
	`id` text PRIMARY KEY NOT NULL,
	`recipe_id` text NOT NULL,
	`pantry_product_id` text,
	`name` text NOT NULL,
	`quantity` real,
	`unit` text,
	`option` integer DEFAULT false NOT NULL,
	`note` text,
	FOREIGN KEY (`recipe_id`) REFERENCES `pantry-recipes`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_pantry-recipe_ingredients`("id", "recipe_id", "pantry_product_id", "name", "quantity", "unit", "option", "note") SELECT "id", "recipe_id", "pantry_product_id", "name", "quantity", "unit", "option", "note" FROM `pantry-recipe_ingredients`;--> statement-breakpoint
DROP TABLE `pantry-recipe_ingredients`;--> statement-breakpoint
ALTER TABLE `__new_pantry-recipe_ingredients` RENAME TO `pantry-recipe_ingredients`;--> statement-breakpoint
CREATE TABLE `__new_pantry-recipe_steps` (
	`id` text PRIMARY KEY NOT NULL,
	`recipe_id` text NOT NULL,
	`order_index` integer,
	`text` text NOT NULL,
	`timer_seconds` integer,
	FOREIGN KEY (`recipe_id`) REFERENCES `pantry-recipes`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_pantry-recipe_steps`("id", "recipe_id", "order_index", "text", "timer_seconds") SELECT "id", "recipe_id", "order_index", "text", "timer_seconds" FROM `pantry-recipe_steps`;--> statement-breakpoint
DROP TABLE `pantry-recipe_steps`;--> statement-breakpoint
ALTER TABLE `__new_pantry-recipe_steps` RENAME TO `pantry-recipe_steps`;
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
	`created_at` integer DEFAULT '"2026-01-16T04:31:38.962Z"'
);
--> statement-breakpoint
INSERT INTO `__new_pantry-pantry`("id", "user_id", "name", "quantity", "unit", "image", "category", "expiresInDays", "lowStock", "created_at") SELECT "id", "user_id", "name", "quantity", "unit", "image", "category", "expiresInDays", "lowStock", "created_at" FROM `pantry-pantry`;--> statement-breakpoint
DROP TABLE `pantry-pantry`;--> statement-breakpoint
ALTER TABLE `__new_pantry-pantry` RENAME TO `pantry-pantry`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_pantry-shopping_list` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`name` text NOT NULL,
	`category` text,
	`created_at` integer DEFAULT '"2026-01-16T04:31:39.084Z"'
);
--> statement-breakpoint
INSERT INTO `__new_pantry-shopping_list`("id", "user_id", "name", "category", "created_at") SELECT "id", "user_id", "name", "category", "created_at" FROM `pantry-shopping_list`;--> statement-breakpoint
DROP TABLE `pantry-shopping_list`;--> statement-breakpoint
ALTER TABLE `__new_pantry-shopping_list` RENAME TO `pantry-shopping_list`;
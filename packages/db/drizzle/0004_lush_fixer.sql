DROP TABLE `pantry-tags`;--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_pantry-pantry` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`name` text NOT NULL,
	`quantity` integer DEFAULT 1,
	`image` text,
	`category` text,
	`created_at` integer DEFAULT '"2025-09-15T02:57:46.134Z"'
);
--> statement-breakpoint
INSERT INTO `__new_pantry-pantry`("id", "user_id", "name", "quantity", "image", "category", "created_at") SELECT "id", "user_id", "name", "quantity", "image", "category", "created_at" FROM `pantry-pantry`;--> statement-breakpoint
DROP TABLE `pantry-pantry`;--> statement-breakpoint
ALTER TABLE `__new_pantry-pantry` RENAME TO `pantry-pantry`;--> statement-breakpoint
PRAGMA foreign_keys=ON;
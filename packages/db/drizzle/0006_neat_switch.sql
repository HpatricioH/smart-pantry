PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_pantry-pantry` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`name` text NOT NULL,
	`quantity` integer DEFAULT 1,
	`unit` text,
	`image` text,
	`category` text,
	`expiresInDays` integer,
	`lowStock` integer DEFAULT true,
	`created_at` integer DEFAULT '"2025-09-18T03:05:24.603Z"'
);
--> statement-breakpoint
INSERT INTO `__new_pantry-pantry`("id", "user_id", "name", "quantity", "unit", "image", "category", "expiresInDays", "lowStock", "created_at") SELECT "id", "user_id", "name", "quantity", "unit", "image", "category", "expiresInDays", "lowStock", "created_at" FROM `pantry-pantry`;--> statement-breakpoint
DROP TABLE `pantry-pantry`;--> statement-breakpoint
ALTER TABLE `__new_pantry-pantry` RENAME TO `pantry-pantry`;--> statement-breakpoint
PRAGMA foreign_keys=ON;
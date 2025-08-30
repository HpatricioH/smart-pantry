CREATE TABLE `pantry-pantry` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`name` text NOT NULL,
	`quantity` integer DEFAULT 1,
	`image` text,
	`category` text,
	`created_at` integer DEFAULT '"2025-08-29T03:07:35.349Z"'
);
--> statement-breakpoint
CREATE TABLE `pantry-categories` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text,
	`name` text NOT NULL,
	`image` text,
	`sort_order` integer DEFAULT 0,
	`is_active` integer DEFAULT true,
	`created_at` integer,
	`updated_at` integer
);

ALTER TABLE `partners` ADD `phone` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `partners` ADD `website` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `partners` ADD `description` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `partners` ADD `rooms` integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `partners` ADD `capacity` integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `partners` ADD `image_key` text;
CREATE TABLE `deals` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`deal_id` text NOT NULL,
	`owner_email` text NOT NULL,
	`venue_name` text NOT NULL,
	`title` text NOT NULL,
	`deal_type` text NOT NULL,
	`visibility` text NOT NULL,
	`regular_price` real NOT NULL,
	`deal_price` real NOT NULL,
	`min_participants` integer NOT NULL,
	`max_participants` integer NOT NULL,
	`included` text DEFAULT '' NOT NULL,
	`unique_value` text NOT NULL,
	`valid_from` text NOT NULL,
	`valid_to` text NOT NULL,
	`lead_protection_months` integer DEFAULT 6 NOT NULL,
	`status` text DEFAULT 'draft' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `deals_deal_id_unique` ON `deals` (`deal_id`);--> statement-breakpoint
CREATE TABLE `leads` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`lead_id` text NOT NULL,
	`deal_id` text,
	`company` text NOT NULL,
	`contact_name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text DEFAULT '' NOT NULL,
	`destination` text NOT NULL,
	`meeting_date` text NOT NULL,
	`participants` integer NOT NULL,
	`meeting_type` text NOT NULL,
	`notes` text DEFAULT '' NOT NULL,
	`protection_months` integer DEFAULT 6 NOT NULL,
	`protection_until` text NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `leads_lead_id_unique` ON `leads` (`lead_id`);--> statement-breakpoint
CREATE TABLE `partners` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`owner_email` text NOT NULL,
	`name` text NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `partners_owner_email_unique` ON `partners` (`owner_email`);
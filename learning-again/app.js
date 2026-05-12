import fs from 'fs/promises';

/**
 * 
 * Exercise 1 — “Log File That Tells On You”
Goal: prove you understand append vs overwrite

Build a script that:

Creates a file activity.txt using fs.writeFile()
Adds 5 lines using fs.appendFile() like:
User logged in
User clicked button
etc.
Reads the file using fs.readFile() and prints it cleanly
Twist (important):

Run your script twice.

If your code is correct → logs double on second run
If wrong → logs get erased or duplicated incorrectly

👉 You are testing whether you actually understand persistence

Exercise 2 — “Fake Database Reset Button”
Goal: understand destructive operations (unlink vs overwrite)

You simulate a “database”:

Create db.txt with some starter data:

user=alice
user=bob

Then build a script that asks:

"Reset database? yes/no"

If YES:

Delete file using fs.unlink()
Then recreate it with default content using fs.writeFile()

If NO:

Just append: backup created

👉 What this tests:

safe destructive operations
decision flow before file deletion
understanding that delete ≠ overwrite
Exercise 3 — “Broken Notes Recovery”
Goal: read → transform → rewrite (core backend skill)

Create a file notes.txt manually with messy lines:

buy milk
FIX THIS
call mom
????
study node

Now write a script that:

Reads the file
Removes invalid lines (you define rule: e.g. must be lowercase letters + spaces only)
Writes cleaned output back into the SAME file using writeFile()

👉 Important constraint:
You are NOT allowed to use any other modules or tools.

What this is really testing (no sugarcoating)

If you fail these, it’s not “Node is hard”—it’s:

You don’t understand file state (overwrite vs append)
You don’t control side effects (unlink is dangerous if misused)
You can’t turn raw text → processed output → rewritten file

That’s the foundation of:

CLI tools
log systems
backend APIs
automation scripts
 */
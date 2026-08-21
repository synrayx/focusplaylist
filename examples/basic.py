"""Minimal example for FocusPlaylist."""

from focusplaylist import focusplaylist


def main():
 runner = focusplaylist({"name": "FocusPlaylist", "dry_run": False})
 result = runner.execute()
 print(result)


if __name__ == "__main__":
 main()
import { program } from "commander";
import diffHandler from "../frontend-project-46/diffHandler.js";

program
  .name("gendiff")
  .version("0.0.1")
  .description("Compares two configuration files and shows a difference.")
  .option("-f, --format <type>", "output format")
  .arguments("<filepath1> <filepath2>")
  .action(diffHandler)
  .parse(process.argv);
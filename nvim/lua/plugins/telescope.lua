return {
    'nvim-telescope/telescope.nvim', 
    tag = '0.1.6', 
    dependencies = { 'nvim-lua/plenary.nvim' },
    config = function()
        require"telescope".load_extension "project"
        require"telescope".load_extension "file_browser"
        local fb_actions = require "telescope".extensions.file_browser.actions

        local builtin = require('telescope.builtin')
        vim.keymap.set('n', '<space>tf', ":Telescope find_files hidden=true<CR>", {})
        vim.keymap.set('n', '<space>tg', ":Telescope live_grep hidden=true<CR>", {})
        vim.keymap.set('n', '<space>tb', ":Telescope file_browser <CR>", {})
        vim.keymap.set('n', '<space>tp', ":Telescope project <CR>", {})

        require("telescope").setup {
            defaults = {
                vimgrep_arguments = {
                    "rg",
                    "--follow",        -- Follow symbolic links
                    "--hidden",        -- Search for hidden files
                    "--no-heading",    -- Don't group matches by each file
                    "--with-filename", -- Print the file path with the matched lines
                    "--line-number",   -- Show line numbers
                    "--column",        -- Show column numbers
                    "--smart-case",    -- Smart case search
                },
                file_ignore_patterns = {
                    "node_modules", ".git", "target", "build", "dist"
                },
                path_display = { "truncate" },
            },

            pickers = {
                find_files = {
                    hidden = true,
                },
                live_grep = {
                    hidden = true,
                }
            },

            extensions = {
                file_browser = {
                    theme = "ivy",
                    hijack_netrw = true,
                    mappings = {
                        ["i"] = {
                            ["<C-w>"] = function() vim.cmd("normal vbd") end,
                            ["<C-h>"] = fb_actions.toggle_hidden
                        },
                        ["n"] = {
                            ["N"] = fb_actions.create,
                            ["h"] = fb_actions.goto_parent_dir,
                            ["<C-h>"] = fb_actions.toggle_hidden,
                            ["/"] = function()
                                vim.cmd("startinsert")
                            end
                        }
                    }
                }
            }
        }
    end
}
return {
	"neovim/nvim-lspconfig",
	config = function()
		local coq = require "coq"

		require('lspconfig').ruff_lsp.setup(coq.lsp_ensure_capabilities({}))
		require'lspconfig'.rust_analyzer.setup{}
	end
}

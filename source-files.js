var N = null;var sourcesIndex = {};
sourcesIndex["cfg_if"] = {"name":"","files":["lib.rs"]};
sourcesIndex["getrandom"] = {"name":"","files":["error.rs","error_impls.rs","lib.rs","util.rs","windows.rs"]};
sourcesIndex["libm"] = {"name":"","dirs":[{"name":"math","files":["acos.rs","acosf.rs","acosh.rs","acoshf.rs","asin.rs","asinf.rs","asinh.rs","asinhf.rs","atan.rs","atan2.rs","atan2f.rs","atanf.rs","atanh.rs","atanhf.rs","cbrt.rs","cbrtf.rs","ceil.rs","ceilf.rs","copysign.rs","copysignf.rs","cos.rs","cosf.rs","cosh.rs","coshf.rs","erf.rs","erff.rs","exp.rs","exp10.rs","exp10f.rs","exp2.rs","exp2f.rs","expf.rs","expm1.rs","expm1f.rs","expo2.rs","fabs.rs","fabsf.rs","fdim.rs","fdimf.rs","fenv.rs","floor.rs","floorf.rs","fma.rs","fmaf.rs","fmax.rs","fmaxf.rs","fmin.rs","fminf.rs","fmod.rs","fmodf.rs","frexp.rs","frexpf.rs","hypot.rs","hypotf.rs","ilogb.rs","ilogbf.rs","j0.rs","j0f.rs","j1.rs","j1f.rs","jn.rs","jnf.rs","k_cos.rs","k_cosf.rs","k_expo2.rs","k_expo2f.rs","k_sin.rs","k_sinf.rs","k_tan.rs","k_tanf.rs","ldexp.rs","ldexpf.rs","lgamma.rs","lgamma_r.rs","lgammaf.rs","lgammaf_r.rs","log.rs","log10.rs","log10f.rs","log1p.rs","log1pf.rs","log2.rs","log2f.rs","logf.rs","mod.rs","modf.rs","modff.rs","nextafter.rs","nextafterf.rs","pow.rs","powf.rs","rem_pio2.rs","rem_pio2_large.rs","rem_pio2f.rs","remainder.rs","remainderf.rs","remquo.rs","remquof.rs","round.rs","roundf.rs","scalbn.rs","scalbnf.rs","sin.rs","sincos.rs","sincosf.rs","sinf.rs","sinh.rs","sinhf.rs","sqrt.rs","sqrtf.rs","tan.rs","tanf.rs","tanh.rs","tanhf.rs","tgamma.rs","tgammaf.rs","trunc.rs","truncf.rs"]}],"files":["lib.rs"]};
sourcesIndex["lin_proj"] = {"name":"","dirs":[{"name":"bench","files":["mod.rs"]},{"name":"implementation","files":["blocks.rs","checks.rs","common.rs","francis.rs","givens.rs","hessenberg.rs","householder.rs","mod.rs","qr_basic.rs","qr_symmetric.rs","svd.rs"]},{"name":"interface","files":["eigenvalues.rs","errors.rs","hessenberg.rs","mod.rs","qr_decomposition.rs","schur_form.rs","svd.rs","types.rs"]},{"name":"tests","files":["mod.rs"]}],"files":["lib.rs"]};
sourcesIndex["matrixmultiply"] = {"name":"","dirs":[{"name":"x86","files":["macros.rs","mod.rs"]}],"files":["aligned_alloc.rs","archparam.rs","debugmacros.rs","dgemm_kernel.rs","gemm.rs","kernel.rs","lib.rs","loopmacros.rs","sgemm_kernel.rs","util.rs"]};
sourcesIndex["ndarray"] = {"name":"","dirs":[{"name":"dimension","files":["axes.rs","axis.rs","conversion.rs","dim.rs","dimension_trait.rs","dynindeximpl.rs","macros.rs","mod.rs","ndindex.rs","remove_axis.rs"]},{"name":"extension","files":["nonnull.rs"]},{"name":"impl_views","files":["constructors.rs","conversions.rs","indexing.rs","mod.rs","splitting.rs"]},{"name":"iterators","files":["chunks.rs","iter.rs","lanes.rs","macros.rs","mod.rs","windows.rs"]},{"name":"layout","files":["layoutfmt.rs","mod.rs"]},{"name":"linalg","files":["impl_linalg.rs","mod.rs"]},{"name":"numeric","files":["impl_numeric.rs","mod.rs"]},{"name":"zip","files":["mod.rs","zipmacro.rs"]}],"files":["aliases.rs","argument_traits.rs","arrayformat.rs","arraytraits.rs","data_repr.rs","data_traits.rs","error.rs","extension.rs","free_functions.rs","geomspace.rs","impl_1d.rs","impl_2d.rs","impl_clone.rs","impl_constructors.rs","impl_cow.rs","impl_dyn.rs","impl_methods.rs","impl_ops.rs","impl_owned_array.rs","impl_raw_views.rs","impl_special_element_types.rs","indexes.rs","itertools.rs","lib.rs","linalg_traits.rs","linspace.rs","logspace.rs","macro_utils.rs","numeric_util.rs","partial.rs","prelude.rs","private.rs","shape_builder.rs","slice.rs","split_at.rs","stacking.rs"]};
sourcesIndex["ndarray_rand"] = {"name":"","files":["lib.rs"]};
sourcesIndex["num"] = {"name":"","files":["lib.rs"]};
sourcesIndex["num_bigint"] = {"name":"","dirs":[{"name":"bigint","files":["addition.rs","bits.rs","convert.rs","division.rs","multiplication.rs","power.rs","shift.rs","subtraction.rs"]},{"name":"biguint","files":["addition.rs","bits.rs","convert.rs","division.rs","iter.rs","monty.rs","multiplication.rs","power.rs","shift.rs","subtraction.rs"]}],"files":["bigint.rs","biguint.rs","lib.rs","macros.rs"]};
sourcesIndex["num_complex"] = {"name":"","files":["cast.rs","lib.rs","pow.rs"]};
sourcesIndex["num_integer"] = {"name":"","files":["average.rs","lib.rs","roots.rs"]};
sourcesIndex["num_iter"] = {"name":"","files":["lib.rs"]};
sourcesIndex["num_rational"] = {"name":"","files":["lib.rs","pow.rs"]};
sourcesIndex["num_traits"] = {"name":"","dirs":[{"name":"ops","files":["checked.rs","inv.rs","mod.rs","mul_add.rs","overflowing.rs","saturating.rs","wrapping.rs"]}],"files":["bounds.rs","cast.rs","float.rs","identities.rs","int.rs","lib.rs","macros.rs","pow.rs","real.rs","sign.rs"]};
sourcesIndex["ppv_lite86"] = {"name":"","dirs":[{"name":"x86_64","files":["mod.rs","sse2.rs"]}],"files":["lib.rs","soft.rs","types.rs"]};
sourcesIndex["rand"] = {"name":"","dirs":[{"name":"distributions","files":["bernoulli.rs","float.rs","integer.rs","mod.rs","other.rs","uniform.rs","utils.rs","weighted.rs","weighted_index.rs"]},{"name":"rngs","dirs":[{"name":"adapter","files":["mod.rs","read.rs","reseeding.rs"]}],"files":["mock.rs","mod.rs","small.rs","std.rs","thread.rs","xoshiro256plusplus.rs"]},{"name":"seq","files":["index.rs","mod.rs"]}],"files":["lib.rs","prelude.rs","rng.rs"]};
sourcesIndex["rand_chacha"] = {"name":"","files":["chacha.rs","guts.rs","lib.rs"]};
sourcesIndex["rand_core"] = {"name":"","files":["block.rs","error.rs","impls.rs","le.rs","lib.rs","os.rs"]};
sourcesIndex["rand_distr"] = {"name":"","files":["binomial.rs","cauchy.rs","dirichlet.rs","exponential.rs","gamma.rs","geometric.rs","hypergeometric.rs","inverse_gaussian.rs","lib.rs","normal.rs","normal_inverse_gaussian.rs","pareto.rs","pert.rs","poisson.rs","triangular.rs","unit_ball.rs","unit_circle.rs","unit_disc.rs","unit_sphere.rs","utils.rs","weibull.rs","weighted_alias.rs","ziggurat_tables.rs"]};
sourcesIndex["rawpointer"] = {"name":"","files":["lib.rs"]};
createSourceSidebar();
